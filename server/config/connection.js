const mongoose = require("mongoose");
const mongoUri = process.env.MONGODB_URI;

console.log();
mongoose.connect(mongoUri || "mongodb://localhost/deep-thoughts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
