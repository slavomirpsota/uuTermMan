"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SchoolMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = SchoolMongo;
