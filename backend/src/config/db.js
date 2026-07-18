const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;
    if (!uri) {
      const mongod = await MongoMemoryServer.create();
      uri = mongod.getUri();
      console.log('MongoDB Memory Server used.');
    }
    await mongoose.connect(uri);
    console.log(`MongoDB Connected at ${uri}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;