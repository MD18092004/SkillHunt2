const mongoose =  require("mongoose");

const UserSchema = new mongoose.Schema({
    // firstname:{
    //     type: String,
    //     required: true,
    // },
    // lastname:{
    //     type: String,
    //     required: false,
    // },
    name: {
        type:String,
        required:true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    experiences:{
        type: String,
        required: false,
    },
    projects:{
        type: String,
        required: false,
    }, 
    skills:{
        type: String,
        required: false,
    },


});

const User = mongoose.model("User",UserSchema);

module.exports = User;
