"use strict";

const TermManUseCaseError = require("./term-man-use-case-error.js");
const ASSIGNMENT_ERROR_PREFIX = `${TermManUseCaseError.ERROR_PREFIX}assignment/`;

const Create = {
  UC_CODE: `${ASSIGNMENT_ERROR_PREFIX}create/`,
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
  SubjectDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}subjectDoesNotExist`;
      this.message = "uuObject subject does not exist.";
    }
  },
  AssignmentDaoCreateFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}assignmentCreateDaoFailed	`;
      this.message = "Create assignment by assignment DAO create failed.	";
    }
  },
};

const Get = {
  UC_CODE: `${ASSIGNMENT_ERROR_PREFIX}get/`,
  SubjectTermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}subjectTermManInstanceDoesNotExist`;
      this.message = "subjectTermManInstance does not exist.";
    }
  },
  SubjectTermManInstanceNotInProperState: class extends TermManUseCaseError {
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
  AssignmentDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}assignmentDoesNotExist`;
      this.message = "uuObject subject does not exist.";
    }
  },
};

const List = {
  UC_CODE: `${ASSIGNMENT_ERROR_PREFIX}list/`,
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
  AssignmentListByDaoFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}AssignmentListByDaoFailed`;
      this.message = "List assignments by assignment DAO list failed.";
    }
  },
};

const Update = {
  UC_CODE: `${ASSIGNMENT_ERROR_PREFIX}update/`,
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
  AssignmentDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}assignmentDoesNotExist`;
      this.message = "uuObject assignment does not exist.";
    }
  },SubjectDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}subjectDoesNotExist`;
      this.message = "uuObject subject does not exist.";
    }
  },
  AssignmentDaoUpdateFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}assignmentUpdateDaoFailed	`;
      this.message = "Update assignment by assignment DAO update failed.";
    }
  },
};

const Delete = {
  UC_CODE: `${ASSIGNMENT_ERROR_PREFIX}delete/`,
  SubjectTermManInstanceDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}subjectTermManInstanceDoesNotExist`;
      this.message = "subjectTermManInstance does not exist.";
    }
  },
  SubjectTermManInstanceNotInProperState: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}subjectTermManInstanceIsNotInCorrectState`;
      this.message = "subjectTermManInstance is not in correct state.";
    }
  },
  InvalidDtoIn: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  AssignmentDoesNotExist: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}assignmentDoesNotExist`;
      this.message = "uuObject assignment does not exist.";
    }
  },
  AssignmentDaoDeleteFailed: class extends TermManUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}assignmentDeleteDaoFailed	`;
      this.message = "Delete assignment by assignment DAO delete failed.";
    }
  },
};

module.exports = {
  Create,
  Get,
  List,
  Update,
  Delete,
};
