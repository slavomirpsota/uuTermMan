"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/subject-term-error.js");
const TermManInstanceAbl = require("./term-man-abl");

const WARNINGS = {

  getUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
  },
  updateUnsupportedKeys: {
    code: `${Errors.Update.UC_CODE}unsupportedKeys`,
  },
  deleteUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`,
  },
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`,
  }
}

const DEFAULTS = {
  sortBy: "name",
  order: "asc",
  pageIndex: 0,
  pageSize: 100,
};

class SubjectTermAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("subjectTerm");
  }

  async list(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.List.SubjectTermManInstanceInstanceDoesNotExist,
      Errors.List.SubjectTermManInstanceInstanceNotInProperState
    );
    let validationResult = this.validator.validate("studentListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    let list;
    console.log(dtoIn);
    dtoIn.awid = awid;
    if (dtoIn.sortBy == null) {
      dtoIn.sortBy = DEFAULTS.sortBy;
    }

    try {
      list = await this.dao.list(awid, dtoIn.sortBy, dtoIn.order, dtoIn.pageInfo);
      console.log(list);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.List.SubjectTermListFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    list.uuAppErrorMap = uuAppErrorMap;
    return list;
  }

 async delete(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Delete.TermManInstanceDoesNotExist,
      Errors.Delete.TermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermDeleteDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    let subjectTerm;
    dtoIn.awid = awid;
    try {
      subjectTerm = await this.dao.get(dtoIn);
      console.log(subjectTerm);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Delete.SubjectDoesNotExist({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    try {
      await this.dao.delete(dtoIn);
      console.log(subjectTerm);
    } catch (e) {
      if(e instanceof ObjectStoreError) {
        throw new Errors.Delete.SubjectTermDeleteFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }
    subjectTerm.uuAppErrorMap = uuAppErrorMap;
    return subjectTerm;
  }
  
  async create(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Create.SubjectTermManInstanceDoesNotExist,
      Errors.Create.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermCreateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );
    let term;
    dtoIn.awid = awid;
    try {
      term = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Error.Create.SubjectTermDaoCreateFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }
    term.uuAppErrorMap = uuAppErrorMap;
    return term;
  }
  

  async update(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Update.SubjectTermManInstanceDoesNotExist,
      Errors.Update.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermUpdateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );
    let subjectTerm;
    try {
      subjectTerm = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.SubjectTermDoesNotExist({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }
    dtoIn.awid = awid;
    try {
      subjectTerm = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.SubjectTermUpdateDaoFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }
    subjectTerm.uuAppErrorMap = uuAppErrorMap;
    return subjectTerm;
  }

  async get(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Get.SubjectTermManInstanceDoesNotExist,
      Errors.Get.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("subjectTermGetDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    let subjectTerm;
    dtoIn.awid = awid;
    try {
      subjectTerm = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Get.SubjectTermDoesNotExist({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }
    subjectTerm.uuAppErrorMap = uuAppErrorMap;
    return subjectTerm;
  }
}

module.exports = new SubjectTermAbl();
