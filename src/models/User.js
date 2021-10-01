const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const User = new Schema({
    
    user_id: { type: mongoose.ObjectId  },
    role_id: { type: mongoose.ObjectId },
    fullname: { type: String, maxLength: 255 },
    phone: { type: String, maxLength: 50},
    email: { type: String, maxLength: 50 },
    password: { type: String, maxLength: 50 },
    image: { type: String },
    description: { type: String, maxLength: 600 },
}, {
    timestamps: true,
});


User.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('User', User);