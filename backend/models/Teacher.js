const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  first_name : {
      type : String,
      required : true
  },
  last_name : {
      type : String,
      required : true
  },
  id : {
      type : String,
      required : true
  },
  email : {
      type : String,
      required : true
  },
  avatar : {
      type : URL,
      required : true
  },
  gender : {
      type : String,
      required : true
  },
  age:{
      type: Number,
      required : true
  },
  students : {
      type : Array,
      default : []
  }
});

module.exports = mongoose.model("Teacher", studentSchema);