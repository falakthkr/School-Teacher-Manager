const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name : {
      type : String,
      required : true
  },
  id : {
      type : String,
      required : true
  },
  group : {
      type : String,
      required : true
  },
  email : {
      type : String,
      required : true
  },
  city : {
      type : String,
      required : true
  },
  avatar : {
      type : String,
      required : true
  },
  gender : {
      type : String,
      required : true
  }
});

module.exports = mongoose.model("Student", studentSchema);