let mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs');
let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, null, null, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
let User = mongoose.model('User', UserSchema);
module.exports = User;
