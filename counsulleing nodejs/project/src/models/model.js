const mongoose = require("mongoose");

const dataSchema = new  mongoose.Schema({
  
    percentile:{
        type: String ,
        require:true
    }
})

const model = new mongoose.model("collegeinfo",dataSchema);

module.exports = model;