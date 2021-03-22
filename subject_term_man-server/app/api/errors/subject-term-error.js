"use strict";

const TermManUseCaseError = require("./term-man-use-case-error.js");
const SUBJECT_TERM_ERROR_PREFIX = `${TermManUseCaseError.ERROR_PREFIX}subjectTerm/`;

const Create = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}create/`,
  SubjectTermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}subjectTermManInstanceDoesNotExist`;
      this.message = "subjectTermManInstance does not exist.";
    }
  },
  SubjectTermManInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}subjectTermManInstanceIsNotInCorrectState`;
      this.message = "subjectTermManInstance is not in correct state.";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  SubjectTermDaoCreateFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}subjectDoesNotExist`;
      this.message = "uuObject subject does not exist.";
    }
  },
};

const Get = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}get/`,
  SubjectTermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}subjectTermManInstanceDoesNotExist`;
      this.message = "subjectTermManInstance does not exist.";
    }
  },
  SubjectTermManInstanceIsNotInCorrectState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}subjectTermManInstanceIsNotInCorrectState`;
      this.message = "subjectTermManInstance is not in correct state.";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectTermDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}subjectTermDoesNotExist`;
      this.message = "SubjectTerm does not exist.";
    }
  },
};

const Update = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}update/`,

  SubjectTermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },

  SubjectTermManInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },

  SubjectTermDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}subjectTermDoesNotExist`;
      this.message = "SubjectTerm does not exist.";
    }
  },

  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  SubjectTermUpdateDaoFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}subjectTermUpdateFailed`;
      this.message = "Updates subjectTerm by subjectTerm dao update failed.";
    }
  },
};

const Delete = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}delete/`,

  TermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },

  TermManInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },

  SubjectTermDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}subjectTermDoesNotExist`;
      this.message = "SubjectTerm does not exist.";
    }
  },

  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectTermDeleteFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}subjectTermDeleteFailed`;
      this.message = "Delete subject failed.";
    }
  },
};

const List = {
  UC_CODE: `${SUBJECT_TERM_ERROR_PREFIX}list/`,

  TermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },

  TermManInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}termManInstanceNotInProperState`;
      this.message = "Term Man Instance is not in valid state. [active | underConstruction]";
    }
  },

  SubjectTermDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}subjectTermDoesNotExist`;
      this.message = "SubjectTerm does not exist.";
    }
  },

  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SubjectTermListFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}subjectTermListFailed`;
      this.message = "List subjects failed.";
    }
  },
};

module.exports = {
  Delete,
  Create,
  Update,
  Get,
  List
};
