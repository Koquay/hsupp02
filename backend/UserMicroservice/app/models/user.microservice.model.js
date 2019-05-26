const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    }    
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };
  
  UserSchema.methods.validPassword = async function(candidatePassword) {
    const result = await bcrypt.compare(candidatePassword, this.password);
    return result;
  };

UserSchema.plugin(uniqueValidator);

mongoose.model('User', UserSchema, 'user');