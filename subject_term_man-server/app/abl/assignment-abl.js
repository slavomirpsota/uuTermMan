"use strict";

const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/assignment-error.js");
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

class AssignmentAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("assignment");
    this.subjectTermDao = DaoFactory.getDao("subject");
  }

  async create(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Create.SubjectTermManInstanceDoesNotExist,
      Errors.Create.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("assignmentCreateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );
    try {
      let subject = this.subjectTermDao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.SubjectDoesNotExist();
      }
    }

    let assignment;
    dtoIn.awid = awid;
    try {
      assignment = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.AssignmentDaoCreateFailed({ uuAppErrorMap }, e);
      } else {
        throw e;
      }
    }

    assignment.uuAppErrorMap = uuAppErrorMap;
    return assignment;
  }

  async get(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Get.SubjectTermManInstanceDoesNotExist,
      Errors.Get.SubjectTermManInstanceNotInProperState
    );
    let validationResult = this.validator.validate("assignmentGetDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    let assignment;
    dtoIn.awid = awid;
    try {
      assignment = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Get.AssignmentDoesNotExist({ uuAppErrorMap }, { subjectId: dtoIn.id });
      } else {
        throw e;
      }
    }
    if (assignment == null) {
      throw new Errors.Get.AssignmentDoesNotExist({ uuAppErrorMap }, { subjectId: dtoIn.id });
    }

    assignment.uuAppErrorMap = uuAppErrorMap;
    return assignment;
  }
  

  async list(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.List.SubjectTermManInstanceDoesNotExist,
      Errors.List.SubjectTermManInstanceNotInProperState
    );
    let validationResult = this.validator.validate("assignmentListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );
    let assignment;
    dtoIn.awid = awid;
    try {
      assignment = await this.dao.list(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.List.AssignmentListByDaoFailed({ uuAppErrorMap }, e);
      }else {
        throw e;
      }
    }
    assignment.uuAppErrorMap = uuAppErrorMap;
    return assignment;
  }

  async update(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Update.SubjectTermManInstanceDoesNotExist,
      Errors.Update.SubjectTermManInstanceNotInProperState
    );

    let validationResult = this.validator.validate("assignmentUpdateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    try {
      let subject = this.subjectTermDao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.SubjectDoesNotExist();
      }
    }
    let assignment;
    try {
      assignment = await this.dao.get(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.AssignmentDoesNotExist({ uuAppErrorMap }, { assignmentId: dtoIn.id });
      }
    }

    dtoIn.awid = awid;
    try {
      assignment = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.AssignmentDaoUpdateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    assignment.uuAppErrorMap = uuAppErrorMap;
    return assignment;
  }

  async delete(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Delete.SubjectTermManInstanceDoesNotExist,
      Errors.Delete.SubjectTermManInstanceNotInProperState
    );
    let validationResult = this.validator.validate("assignmentDeleteDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );
    let assignment;
    dtoIn.awid = awid;
    try {
      assignment = await this.dao.get(dtoIn);
    } catch (e) {
      if (!assignment) {
        throw new Errors.Delete.AssignmentDoesNotExist({ uuAppErrorMap }, { assignmentId: dtoIn.id });
      } else {
        throw e;
      }
    }
    dtoIn.awid = awid;
    try {
      await this.dao.delete(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Delete.AssignmentDaoDeleteFailed({ uuAppErrorMap }, e);
      }
    }
    return uuAppErrorMap;
  }
}

module.exports = new AssignmentAbl();
