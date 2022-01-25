const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://lilyso:rgk6mkp%40KQM8ukq%40zmf@cluster0.oqtvu.mongodb.net/test?authSource=admin&replicaSet=atlas-7d2dv8-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
