const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Post = new Schema({
    role_id: { type: Number, require: true },
    rolename: { type: String, maxLength: 255 },
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