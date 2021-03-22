"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/subject-error.js");
const TermManInstanceAbl = require("./term-man-abl");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
  },
  getUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
  },
  updateUnsupportedKeys: {
    code: `${Errors.Update.UC_CODE}unsupportedKeys`,
  },
  deleteUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`,
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`,
  },
};
const DEFAULTS = {
  sortBy: "name",
  order: "asc",
  pageIndex: 0,
  pageSize: 100,
};

class SubjectAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("subject");
  }

  async delete(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Delete.SubjectTermManInstanceInstanceDoesNotExist,
      Errors.Delete.SubjectTermManInstanceInstanceNotInProperState
    );
    let validationResult = this.validator.validate("subjectDeleteDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    let subject;
    dtoIn.awid = awid;
    try {
      subject = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Delete.SubjectDoesNotExist({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    try {
      await this.dao.delete(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Delete.SubjectDeleteFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }
    subject.uuAppErrorMap = uuAppErrorMap;
    return subject;
  }

  async list(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Create.SubjectTermManInstanceInstanceDoesNotExist,
      Errors.Create.SubjectTermManInstanceInstanceNotInProperState
    );
    let validationResult = this.validator.validate("subjectListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

     let list;
    console.log(dtoIn);
    dtoIn.awid = awid;
    if (dtoIn.sortBy == null) {
      dtoIn.sortBy = DEFAULTS.sortBy;
    }
    try {
      list = await this.dao.list(awid, dtoIn.sortBy, dtoIn.order, dtoIn.pageInfo);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.List.SubjectListByDaoFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }


    list.uuAppErrorMap = uuAppErrorMap;
    return list;
  }

  async update(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Create.SubjectTermManInstanceInstanceDoesNotExist,
      Errors.Create.SubjectTermManInstanceInstanceNotInProperState
    );
    let validationResult = this.validator.validate("subjectUpdateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let subject;
   
    try {
      subject = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.SubjectDoesNotExist({ uuAppErrorMap }, { subjectId: dtoIn.id });
      } else {
        throw e;
      }
    }
 dtoIn.awid = awid;
    try {
      subject = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.SubjectUpdateDaoFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    subject.uuAppErrorMap = uuAppErrorMap;
    return subject;
  }

  async get(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Get.SubjectTermManInstanceInstanceDoesNotExist,
      Errors.Get.SubjectTermManInstanceInstanceNotInProperState
    );
    let validationResult = this.validator.validate("subjectGetDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    let subject;
    dtoIn.awid = awid;
    try {
      subject = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Get.SubjectDoesNotExist({ uuAppErrorMap }, { subjectId: dtoIn.id });
      } else {
        throw e;
      }
    }
    if (subject == null) {
      throw new Errors.Get.SubjectDoesNotExist({ uuAppErrorMap }, { subjectId: dtoIn.id });
    }
    subject.uuAppErrorMap = uuAppErrorMap;
    return subject;
  }

  async create(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Create.SubjectTermManInstanceInstanceDoesNotExist,
      Errors.Create.SubjectTermManInstanceInstanceNotInProperState
    );
    let validationResult = this.validator.validate("subjectCreateDtoInType", dtoIn);

    // let uuAppErrorMap;
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let subject;
    dtoIn.awid = awid;
    try {
      subject = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.SubjectCreateDaoFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    subject.uuAppErrorMap = uuAppErrorMap;
    return subject;
  }
}

module.exports = new SubjectAbl();
