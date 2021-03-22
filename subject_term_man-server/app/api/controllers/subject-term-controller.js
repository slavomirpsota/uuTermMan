"use strict";
const SubjectTermAbl = require("../../abl/subject-term-abl.js");

class SubjectTermController {

  list(ucEnv) {
    return SubjectTermAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  delete(ucEnv) {
    return SubjectTermAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
    }
  create(ucEnv) {
    return SubjectTermAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  update(ucEnv) {
    return SubjectTermAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  get(ucEnv) {
    return SubjectTermAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new SubjectTermController();
