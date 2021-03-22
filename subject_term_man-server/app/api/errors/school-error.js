"use strict";

const TermManUseCaseError = require("./term-man-use-case-error.js");
const SCHOOL_ERROR_PREFIX = `${TermManUseCaseError.ERROR_PREFIX}school/`;

const Get = {
  UC_CODE: `${SCHOOL_ERROR_PREFIX}get/`,
  SubjectTermManInstanceInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },
  SubjectTermManInstanceInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchoolDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}schoolDoesNotExist`;
      this.message = "School does not exist.";
    }
  },
};

const Update = {
  UC_CODE: `${SCHOOL_ERROR_PREFIX}update/`,

  SubjectTermManInstanceInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },

  SubjectTermManInstanceInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },

  SchoolDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}schoolDoesNotExist`;
      this.message = "School does not exist.";
    }
  },

  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

module.exports = {
  Update,
  Get
};
