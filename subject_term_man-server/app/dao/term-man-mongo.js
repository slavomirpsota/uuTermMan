"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class TermManMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    let filter = {
      awid: awid,
      id: id,
    };
    return await super.findOne(filter);
  }
  async load(uuObject) {
    return await super.loadOne(uuObject);
  }
  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }

  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }

  async remove(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.deleteOne(filter);
  }

  async getByAwid(awid) {
    return await super.findOne({awid});
  }

  async updateByAwid(termManInstance) {
    return await super.findOneAndUpdate({awid: termManInstance.awid}, termManInstance, "NONE");
  }
}

module.exports = TermManMongo;
