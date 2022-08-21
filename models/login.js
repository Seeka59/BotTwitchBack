/*var mongoose = require('./dbConfig.js'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId,
  uuid = require('node-uuid'),
  Validator = require('validator').Validator,
  val = new Validator(),
  bcrypt = require('bcrypt');

Validator.prototype.error = function(msg) { return false; };

var CustomerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: { type: String, lowercase: true, unique: true },
  passwordHash: { type: String, required: true },
  active: { type: Boolean, default: true, required: true },
  lastUpdatedBy: { type: String, required: true, default: 'System' },
  lastUpdatedDate: { type: Date, required: true, default: new Date() },
  passwordResetToken: String,
  passwordResetExpiration: Date,
  emailConfirmationToken: { type: String, default: uuid() }, 
  lastIPAddress: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
  _parent: Schema.ObjectId
});

CustomerSchema.virtual('password')
.get(function() {
  return this._password;
})
.set(function(value) {
  this._password = value;
  var salt = bcrypt.gen_salt_sync(12);
  this.passwordHash = bcrypt.encrypt_sync(value, salt);
});

CustomerSchema.virtual('passwordConfirmation')
.get(function() {
  return this._passwordConfirmation;
})
.set(function(value) {
  this._passwordConfirmation = value;
});

CustomerSchema.path('passwordHash').validate(function(v) {
  if (this._password || this._passwordConfirmation) {
    if (!val.check(this._password).min(6)) {
      this.invalidate('password', 'must be at least 6 characters.');
    }
    if (this._password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'must match confirmation.');
    }
  }
  
  if (this.isNew && !this._password) {
    this.invalidate('password', 'required');
  }
}, null);

CustomerSchema.path('firstName').validate(function(v) {
  if (!val.check(v).max(100)) {
    this.invalidate('firstName', 'must be less than 100 characters');
  }  
}, null);

CustomerSchema.path('lastName').validate(function(v) {
  if (!val.check(v).max(100)) {
    this.invalidate('lastName', 'must be less than 100 characters');
  }
}, null);

CustomerSchema.path('emailAddress').validate(function(v) {
  if (!val.check(v).isEmail()) {
    this.invalidate('emailAddress', 'must be a valid email address');
  }
}, null);

module.exports = mongoose.model('Customer', CustomerSchema);*/