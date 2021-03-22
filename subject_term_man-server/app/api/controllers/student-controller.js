"use strict";
const StudentAbl = require("../../abl/student-abl.js");

class StudentController {

  delete(ucEnv) {
    return StudentAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return StudentAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  update(ucEnv) {
    return StudentAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return StudentAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  get(ucEnv) {
    return StudentAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new StudentController();
