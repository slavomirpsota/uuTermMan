"use strict";
const TermManUseCaseError = require("./term-man-use-case-error.js");

  const Init = {
    UC_CODE: `${TermManUseCaseError.ERROR_PREFIX}init/`,
  
    TermManInstanceAlreadyInitialized: class extends TermManUseCaseError {
      constructor() {
        super(...arguments);
        this.code = `${Init.UC_CODE}termManInstanceAlreadyInitialized`;
        this.message = "TermManInstance is already initialized.";
      }
    },
  
    SysSetProfileFailed: class extends TermManUseCaseError {
      constructor() {
        super();
        this.code = `${Init.UC_CODE}sysSetProfileFailed`;
        this.message = "Failed to set profiles";
      }
    },
  
    TermManDaoCreateFailed: class  extends TermManUseCaseError {
      constructor() {
        super();
        this.code = `${Init.UC_CODE}termManDaoCreateFailed`;
        this.message = "TermManDao failed to create DAO";
      }
    },
  
    
    InvalidDtoIn: class extends TermManUseCaseError {
      constructor() {
        super(...arguments);
        this.code = `${Init.UC_CODE}invalidDtoIn`;
        this.message = "DtoIn is not valid.";
      }
    },
  
    SchemaDaoCreateSchemaFailed: class extends TermManUseCaseError {
      constructor() {
        super(...arguments);
        this.status = 500;
        this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
        this.message = "Create schema by Dao createSchema failed.";
      }
    },
  
    SetProfileFailed: class extends TermManUseCaseError {
      constructor() {
        super(...arguments);
        this.code = `${Init.UC_CODE}sys/setProfileFailed`;
        this.message = "Set profile failed.";
      }
    },
  
    CreateAwscFailed: class extends TermManUseCaseError {
      constructor() {
        super(...arguments);
        this.code = `${Init.UC_CODE}createAwscFailed`;
        this.message = "Create uuAwsc failed.";
      }
    },
  }

  const Load ={
      UC_CODE: `${TermManUseCaseError.ERROR_PREFIX}load/`,
      TermManInstanceDoesNotExist: class extends TermManUseCaseError {
        constructor() {
          super(...arguments);
          this.code = `${Load.UC_CODE}subjectTermManInstanceDoesNotExist`;
          this.message = "subjectTermManInstance does not exist.";
        }
      },
      TermManInstanceNotInProperState: class extends TermManUseCaseError {
        constructor() {
          super(...arguments);
          this.code = `${Load.UC_CODE}subjectTermManInstanceIsNotInCorrectState`;
          this.message = "subjectTermManInstance is not in correct state.";
        }
      },
      TermManInstanceIsUnderConstruction: class extends TermManUseCaseError {
        constructor() {
          super(...arguments);
          this.code = `${Load.UC_CODE}subjectTermManInstanceIsUnderConstruction`;
          this.message = "JsubjectTermManInstance is in state underConstruction.";
        }
      }
    };
  
module.exports = {
  Init,
  Load
};
