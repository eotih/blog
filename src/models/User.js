const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Post = new Schema({
    user_id: { type: Number, require: true },
    role_id: { type: Number, require: true },
    fullname: { type: String, maxLength: 255 },
    phone: { type: Number, maxLength: 50},//uniqie = true là không có thể được 2 slug
    email: { type: String, maxLength: 50 },
    password: { type: String, maxLength: 50 },
    image: { type: String },
    description: { type: String, maxLength: 600 },
}, {
    timestamps: true,
});

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Course', Course);