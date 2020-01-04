const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default : Date.now 
    }
});

UserSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password, 12)
};

UserSchema.methods.comparePassword = function(password, hashPassword){
    return bcrypt.compareSync(password, hashPassword);
};

module.exports = User = mongoose.model('User', UserSchema); 