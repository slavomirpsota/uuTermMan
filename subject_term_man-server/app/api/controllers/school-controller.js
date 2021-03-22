"use strict";
const SchoolAbl = require("../../abl/school-abl.js");

class SchoolController {

  update(ucEnv) {
    return SchoolAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  get(ucEnv) {
    return SchoolAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new SchoolController();
