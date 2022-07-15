// El modelo de la Empresa , incluye el name de la empresa y ademas se le agregó que devuelva los empleados de la misma.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({     
 name:{
   required: true,
   type: String,
   unique: true 
  },
 companyUsers:[{
   required: true,
   type: Schema.Types.ObjectId,
   ref: "User"
 }]
});

module.exports = mongoose.model("Company", companySchema)    
