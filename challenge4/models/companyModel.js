const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({     
 name:{
    type: String,
    unique: true 
  },
 companyUsers:[{
    type: Schema.Types.ObjectId,
    ref: "User"
 }]
});

module.exports = mongoose.model("Company", companySchema)    
