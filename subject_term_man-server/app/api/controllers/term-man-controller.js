"use strict";
const TermManAbl = require("../../abl/term-man-abl.js");

class TermManController {
  init(ucEnv) {
    return TermManAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
  load(ucEnv) {
    return TermManAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
  update(ucEnv) {
    return TermManAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new TermManController();
