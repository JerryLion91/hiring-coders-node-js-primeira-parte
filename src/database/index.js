import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
    this.logInfo();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://mongodb:7e8aF8ssH2PwHvK8@cluster0.gz2a4.mongodb.net/sistema?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  }
  logInfo() {
    console.log('Connected with database');
  }
}

export default new Database();
