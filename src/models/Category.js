const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Category = new Schema({
    category_id: { type: Number, require: true },
    name: { type: String, maxLength: 255 },
    published: { type: String, require: true },
}, {
    timestamps: true,
});

//Add plugin
Category.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Category', Category);