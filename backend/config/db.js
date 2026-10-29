const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/soil_fertility';

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    const isLocalUri = /127\.0\.0\.1|localhost/.test(uri);

    if (!isLocalUri) {
      throw error;
    }

    const memoryServer = await MongoMemoryServer.create();
    await mongoose.connect(memoryServer.getUri());
    console.log('MongoDB connected using in-memory server');
  }
};
