"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SubjectMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({awid: 1, _id: 1 }, {unique: true} );
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(uuObject) {
    return await super.findOne({ id: uuObject.id, awid : uuObject.awid});
  }

  async update(uuObject) {
    return await super.findOneAndUpdate({ id: uuObject.id, awid: uuObject.awid }, uuObject, "NONE");
  }

  async delete(uuObject) {
    await super.deleteOne({ awid: uuObject.awid, id: uuObject.id });
  }

  async list(awid, sortBy, order, pageInfo) {
    let sort = {
      [sortBy]: order === "asc" ? 1 : -1,
    };
    return await super.find({ awid: awid }, pageInfo, sort);
  }


}

module.exports = SubjectMongo;
