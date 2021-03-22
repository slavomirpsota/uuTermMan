"use strict";

const TermManUseCaseError = require("./term-man-use-case-error.js");
const SUBJECT_ERROR_PREFIX = `${TermManUseCaseError.ERROR_PREFIX}subject/`;

const Create = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}create/`,
  SubjectTermManInstanceInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },
  SubjectTermManInstanceInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectCreateDaoFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}subjectCreateDaoFailed`;
      this.message = "Create subject by subject DAO create failed.";
    }
  },
};

const Get = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}get/`,
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

  SubjectDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}subjectDoesNotExist`;
      this.message = "subject does not exist.";
    }
  },
};

const Update = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}update/`,
  SubjectTermManInstanceInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },
  SubjectTermManInstanceInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}subjectDoesNotExist`;
      this.message = "uuObject subject does not exist";
    }
  },

  SubjectUpdateDaoFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}subjectUpdateDaoFailed`;
      this.message = "Update subject by subject DAO update failed.";
    }
  },
};

const List = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}list/`,
  SubjectTermManInstanceInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },
  SubjectTermManInstanceInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  SubjectListByDaoFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}subjectListByDaoFailed`;
      this.message = "List subjects by subject DAO list failed.";
    }
  },
};
const Delete = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}delete/`,
  SubjectTermManInstanceInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },
  SubjectTermManInstanceInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}subjectDoesNotExist`;
      this.message = "Subject does not exist.";
    }
  },
  SubjectDeleteFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}subjectDeleteFailed`;
      this.message = "Delete subject failed.";
    }
  },
};

module.exports = {
  Delete,
  List,
  Update,
  Get,
  Create,
};
