"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { Profile, AppClientTokenService, UuAppWorkspace, UuAppWorkspaceError } = require("uu_appg01_server").Workspace;
const { UriBuilder } = require("uu_appg01_server").Uri;
const { LoggerFactory } = require("uu_appg01_server").Logging;
const { AppClient } = require("uu_appg01_server");
const  Errors  = require("../api/errors/term-man-error.js");

const WARNINGS = {
  initUnsupportedKeys: {
    code: `${Errors.Init.UC_CODE}unsupportedKeys`
  },
};

const logger = LoggerFactory.get("TermManAbl");

const STATE_ACTIVE = "active";
const STATE_UNDER_CONTRUCITON = "underConstruction";
const STATE_CLOSED = "closed";

class TermManAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("termMan");
  }

  async load(awid, authorizationResult) {
    let termManInstance = await this.checkInstance(
      awid,
      Errors.Load.TermManInstanceDoesNotExist,
      Errors.Load.TermManInstanceNotInProperState
    );
  
    let authorizedProfiles = authorizationResult.getAuthorizedProfiles();
    if (
      termManInstance.state === STATE_UNDER_CONSTRUCTION &&
      !authorizedProfiles.includes(AUTHORITIES) &&
      !authorizedProfiles.includes(EXECUTIVES)
    ) {
      throw new Errors.Load.TermManInstanceIsUnderConstruction({}, { state: termManInstance.state });
    }

    termManInstance.authorizedProfileList = authorizedProfiles;
    
    dtoIn.awid = awid;
    try{
       termManInstance = await this.categoryDao.list(awid).itemList;
    }catch(e) {
      {throw e    
    }}

    this.load.uuAppErrorMap = uuAppErrorMap
    return termManInstance;
  }
  async update(awid, dtoIn) {

    let validationResult = this.validator.validate("termManInstanceUpdateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    let termMan;
    dtoIn.awid = awid;
    try {
      termMan = await this.dao.updateByAwid(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
  
        throw new Errors.Update.TermManInstanceDaoUpdateByAwidFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    termMan.uuAppErrorMap = uuAppErrorMap;
    return termMan;
  }

  async init(uri, dtoIn, session) {
    const awid = uri.getAwid();
    // HDS 1
    let termManInstance = await this.dao.getByAwid(awid);

    if(termManInstance) {
      throw new Errors.Init.TermManInstanceAlreadyInitialized();
    }
    // A1, A2
    let validationResult = this.validator.validate("initDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.initUnsupportedKeys.code,
      Errors.Init.InvalidDtoIn
    );

    // HDS 2
    const schemas = ["termMan"];
    let schemaCreateResults = schemas.map(async (schema) => {
      try {
        return await DaoFactory.getDao(schema).createSchema();
      } catch (e) {
        // A3
        throw new Errors.Init.SchemaDaoCreateSchemaFailed({ uuAppErrorMap }, { schema }, e);
      }
    });
    await Promise.all(schemaCreateResults);

    if (dtoIn.uuBtLocationUri) {
      const baseUri = uri.getBaseUri();
      const uuBtUriBuilder = UriBuilder.parse(dtoIn.uuBtLocationUri);
      const location = uuBtUriBuilder.getParameters().id;
      const uuBtBaseUri = uuBtUriBuilder.toUri().getBaseUri();

      const createAwscDtoIn = {
        name: "SubjectTerm",
        typeCode: "subject-term-man",
        location: location,
        uuAppWorkspaceUri: baseUri,
      };

      const awscCreateUri = uuBtUriBuilder.setUseCase("uuAwsc/create").toUri();
      const appClientToken = await AppClientTokenService.createToken(uri, uuBtBaseUri);
      const callOpts = AppClientTokenService.setToken({ session }, appClientToken);

      // TODO HDS
      let awscId;
      try {
        const awscDtoOut = await AppClient.post(awscCreateUri, createAwscDtoIn, callOpts);
        awscId = awscDtoOut.id;
      } catch (e) {
        if (e.code.includes("applicationIsAlreadyConnected") && e.paramMap.id) {
          logger.warn(`Awsc already exists id=${e.paramMap.id}.`, e);
          awscId = e.paramMap.id;
        } else {
          throw new Errors.Init.CreateAwscFailed({ uuAppErrorMap }, { location: dtoIn.uuBtLocationUri }, e);
        }
      }

      const artifactUri = uuBtUriBuilder.setUseCase(null).clearParameters().setParameter("id", awscId).toUri();

      await UuAppWorkspace.connectArtifact(
        baseUri,
        {
          artifactUri: artifactUri.toString(),
          synchronizeArtifactBasicAttributes: false,
        },
        session
      );
    }

    // HDS 3
    if (dtoIn.uuAppProfileAuthorities) {
      try {
        await Profile.set(awid, "Authorities", dtoIn.uuAppProfileAuthorities);
      } catch (e) {
        if (e instanceof UuAppWorkspaceError) {
          // A4
          throw new Errors.Init.SysSetProfileFailed({ uuAppErrorMap }, { role: dtoIn.uuAppProfileAuthorities }, e);
        }
        throw e;
      }
    }

    await Promise.all([
      this.dao.createSchema(),
      DaoFactory.getDao("subject").createSchema(),
      //DaoFactory.getDao("subjectTerm").createSchema(),
      //DaoFactory.getDao("student").createSchema(),
      //DaoFactory.getDao("school").createSchema(),
      //DaoFactory.getDao("assignment").createSchema(),
    ]);

    // HDS 4
    dtoIn.awid = awid;
    try{
      termManInstance = await this.dao.create(dtoIn);
    } catch (e) {
      if( e instanceof  ObjectStoreError ) {
        throw new Errors.Init.TermManDaoCreateFailed({uuAppErrorMap}, e);
      }
    }

    if (dtoIn.uuAppProfileAuthorities) {
      try {
        await Profile.set(awid, "Authorities", dtoIn.uuAppProfileAuthorities);
      } catch (e) {
        if (e instanceof UuAppWorkspaceError) {
          // A4
          throw new Errors.Init.SysSetProfileFailed({ uuAppErrorMap }, { role: dtoIn.uuAppProfileAuthorities }, e);
        }
        throw e;
      }
    }

    // HDS N+1
    const workspace = UuAppWorkspace.get(awid);

    termManInstance.uuAppErrorMap = uuAppErrorMap;
    return termManInstance;
  }

  async checkInstance(awid, notExistError, closedStateError) {
    let termManInstance = await this.dao.getByAwid(awid);
    if(!termManInstance) {
      throw new notExistError();
    }
    if(termManInstance.stack == STATE_CLOSED)
      throw new closedStateError(
        {},
        {
          state: termManInstance.state,
          expectedStateList: [STATE_ACTIVE, STATE_UNDER_CONTRUCITON],
        }
      );
    return termManInstance;
  }

  async checkInstance(awid, notExistError, closedStateError) {
    let subjectTermManInstance = await this.dao.getByAwid(awid);
    if (!subjectTermManInstance) {
      throw new notExistError();
    }
    if (subjectTermManInstance.state === STATE_CLOSED) {
      throw new closedStateError(
        {},
        {
          state: subjectTermManInstance.state,
          expectedStateList: [STATE_ACTIVE, STATE_UNDER_CONSTRUCTION]
        }
      );
    }
    return subjectTermManInstance;
  }

}

module.exports = new TermManAbl();
