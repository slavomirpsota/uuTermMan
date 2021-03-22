"use strict";

const TermManUseCaseError = require("./term-man-use-case-error.js");
const STUDENT_ERROR_PREFIX = `${TermManUseCaseError.ERROR_PREFIX}student/`;

const Create = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}create/`,
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
  StudentDaoCreateFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}studentCreateDaoFailed	`;
      this.message = "Create student by student DAO create failed.";
    }
  },
};

const Get = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}get/`,
  SubjectTermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}subjectTermManInstanceDoesNotExist`;
      this.message = "subjectTermManInstance does not exist.";
    }
  },
  TermManInstanceNotInProperState: class extends TermManUseCaseError {
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
  StudentDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}studentDoesNotExist`;
      this.message = "Student does not exist.";
    }
  },
};

const Update = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}update/`,
  SubjectTermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}subjectTermManInstanceDoesNotExist`;
      this.message = "subjectTermManInstance does not exist.";
    }
  },
  SubjectTermManInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}subjectTermManInstanceIsNotInCorrectState`;
      this.message = "subjectTermManInstance is not in correct state.";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  StudentDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}studentDoesNotExist`;
      this.message = "Student does not exist.";
    }
  },
  StudentDaoUpdateFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}studentUpdateDaoFailed`;
      this.message = "Update student by student DAO update failed.";
    }
  },
};
const List = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}list/`,
  SubjectTermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}subjectTermManInstanceDoesNotExist`;
      this.message = "subjectTermManInstance does not exist.";
    }
  },
  SubjectTermManInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}subjectTermManInstanceIsNotInCorrectState`;
      this.message = "subjectTermManInstance is not in correct state.";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  StudentListByDaoFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}StudentListByDaoFailed`;
      this.message = "List student by student DAO list failed.";
    }
  },
};

const Delete = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}delete/`,
  TermManInstanceInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}termManInstanceDoesNotExist`;
      this.message = "Term Man Instance does not exist.";
    }
  },
  TermManInstanceInstanceNotInProperState: class extends TermManUseCaseError {
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
  StudentDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}studentDoesNotExist`;
      this.message = "Student does not exist.";
    }
  },
  studentDeleteDaoFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}studentDeleteDaoFailed`;
      this.message = "Delete student by student DAO delete failed.";
    }
  },
};

module.exports = {
  Delete,
  Create,
  Get,
  Update,
  List,
};
