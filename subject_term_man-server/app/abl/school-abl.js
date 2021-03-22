"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/school-error.js");
const TermManInstanceAbl = require("./term-man-abl");

const WARNINGS = {
  createUnsupportedKeys: {
    createUnsupportedKeys: {
      code: `${Errors.Get.UC_CODE}unsupportedKeys`,
    },
    updateUnsupportedKeys: {
      code: `${Errors.Update.UC_CODE}unsupportedKeys`,
    }
  }
};

class SchoolAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("school");
    this.subject = DaoFactory.getDao("subject");
    this.student = DaoFactory.getDao("student");
  }

  async update(awid, dtoIn) {
    await TermManInstanceAbl.checkInstance(
      awid,
      Errors.Get.SubjectTermManInstanceInstanceDoesNotExist,
      Errors.Get.SubjectTermManInstanceInstanceNotInProperState,
    )

    let validationResult = this.validator.validate("schoolGetDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys,
      Errors.Update.InvalidDtoIn
    );

    let school;
    try {
      school = await this.dao.update(dtoIn);
    } catch (e) {
      if( e instanceof ObjectStoreError) {
        throw new Errors.Update.SchoolDoesNotExist({uuAppErrorMap}, e);
      } else {
        throw e;
      }
    }
    school.uuAppErrorMap = uuAppErrorMap;
    return school;

  }

  async get(awid, dtoIn) {
   await TermManInstanceAbl.checkInstance(
     awid,
     Errors.Get.SubjectTermManInstanceInstanceDoesNotExist,
     Errors.Get.SubjectTermManInstanceInstanceNotInProperState,
   )

    let validationResult = this.validator.validate("schoolGetDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys,
      Errors.Get.InvalidDtoIn
    );

    let school;
    dtoIn.awid = awid;
    try{
      school = await this.dao.get(dtoIn, dtoIn.id);
    } catch (e) {
      if(e instanceof ObjectStoreError) {
        throw new Errors.Get.SchoolDoesNotExist({ uuAppErrorMap }, e);
      }else {
        throw e;
      }
    }
    school.uuAppErrorMap = uuAppErrorMap;
    return school;
  }

}

module.exports = new SchoolAbl();
