// El modelo de Usuarios, incluye name, username, email y el name de la emoresa

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({       
    name: {
      required: true,
        type: String,
        unique: true 
      },
    username: {
      required: true,
        type: String,
        unique: true 
      },
    email: {
        required: true,
        type: String,
        unique: true 
      },
    Company:{
         type: Schema.Types.ObjectId, 
         ref: "Company"
        }
});

module.exports = mongoose.model("User", userSchema)    
