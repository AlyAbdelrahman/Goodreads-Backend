const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/goodreads";
// "mongodb+srv://samar:samar123456_@cluster0-7toh7.mongodb.net/test?retryWrites=true";
mongoose.connect(dbURL, { useNewUrlParser: true, autoIndex: true, useCreateIndex: true });
