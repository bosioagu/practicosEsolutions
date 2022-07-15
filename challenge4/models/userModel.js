const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({       
    name: String,
    username: {
        type: String,
        unique: true 
      },
    email: {
        type: String,
        unique: true 
      },
    Company:{
         type: Schema.Types.ObjectId, 
         ref: "Company"
        }
});

module.exports = mongoose.model("User", userSchema)    
