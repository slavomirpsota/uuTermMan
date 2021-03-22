"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class AssignmentMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }
  async get(uuObject) {
    return await super.findOne({ awid: uuObject.awid, id: uuObject.id });
  }
  async update(uuObject) {
    return await super.findOneAndUpdate({ id: uuObject.id, awid: uuObject.awid }, uuObject, "NULL");
  }
  async list(uuObject) {
    let sort = {
      [uuObject.sortBy]: uuObject.order === "asc" ? 1 : -1,
    };
    return await super.find({ awid: uuObject.awid }, uuObject.pageInfo, sort);
  }
  async delete(uuObject) {
    return await super.deleteOne({ awid: uuObject.awid, id: uuObject.id });
  }
}

module.exports = AssignmentMongo;
