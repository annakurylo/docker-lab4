const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_NAME,
  } = process.env;
  
  module.exports = {
    url: `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}?authSource=admin`
  };