const mongoose = require("mongoose");
const dbURL = "mongodb+srv://samar:samar123456_@cluster0-7toh7.mongodb.net/test?retryWrites=true";
// "mongodb+srv://samar:samar123456_@cluster0-7toh7.mongodb.net/test?retryWrites=true";
mongoose.connect(dbURL, { useNewUrlParser: true, autoIndex: true, useCreateIndex: true });
