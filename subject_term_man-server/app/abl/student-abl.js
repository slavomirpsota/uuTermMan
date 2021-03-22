"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/student-error.js");
const TermManInstanceAbl = require("./term-man-abl");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
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
  getUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
  },
};

class StudentAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("student");
  }

  async create(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Create.SubjectTermManInstanceDoesNotExist,
      Errors.Create.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("studentCreateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );
    let student;
    dtoIn.awid = awid;
    try {
      student = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof StudentStoreError) {
        throw new Error.Create.StudentDaoCreateFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }
    student.uuAppErrorMap = uuAppErrorMap;
    return student;
  }

  async get(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Get.SubjectTermManInstanceInstanceDoesNotExist,
      Errors.Get.SubjectTermManInstanceInstanceNotInProperState
    );
    let validationResult = this.validator.validate("studentGetDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    let student;
    dtoIn.awid = awid;
    try {
      student = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Get.StudentDoesNotExist({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    if (student == null) {
      throw new Errors.Get.StudentDoesNotExist({ uuAppErrorMap }, { studentId: dtoIn.id });
    }
    student.uuAppErrorMap = uuAppErrorMap;
    return student;
  }

  async update(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Update.SubjectTermManInstanceDoesNotExist,
      Errors.Update.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("studentUpdateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn.code
    );
    let student;

    try {
      student = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.StudentDoesNotExist({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    dtoIn.awid = awid;
    try {
      student = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.StudentDaoUpdateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    student.uuAppErrorMap = uuAppErrorMap;
    return student;
  }

  async list(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.List.SubjectTermManInstanceDoesNotExist,
      Errors.List.SubjectTermManInstanceNotInProperState
    );
    let validationResult = this.validator.validate("studentListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );
    let student;
    dtoIn.awid = awid;
    try {
      student = await this.dao.list(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.List.StudentListByDaoFailed({ uuAppErrorMap }, e);
      }
    }
    this.list.uuAppErrorMap = uuAppErrorMap;
    return student;
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

    let student;
    dtoIn.awid = awid;
    try {
      student = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Delete.StudentDoesNotExist({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    try {
      await this.dao.delete(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Delete.studentDeleteDaoFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }
    return uuAppErrorMap;
  }
}

module.exports = new StudentAbl();
