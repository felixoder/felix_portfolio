const mongoose = require('mongoose')
const {Schema,model} = mongoose
const UserSchema = new Schema({
    uname:{ type: String, required: true , min: 4 , unique:true},
    email:{ type: String, required: true },
    subject:{ type: String, required: true },
    message:{ type: String, required: true },
});
const UserModel = model('User',UserSchema);
module.exports = UserModel;