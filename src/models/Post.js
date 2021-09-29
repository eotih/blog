const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Post = new Schema({
    category_id: { type: Number, require: true },
    user_id: { type: Number, require: true },
    title: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'title', unique: true },//uniqie = true là không có thể được 2 slug
    description: { type: String, maxLength: 600 },
    content: { type: String},
    image: { type: String },
    published: { type: String, require: true },
    createdbyuser: { type: String, require: true },
    updatedbyuser: { type: String, require: true },
}, {
    timestamps: true,
});

//Add plugin
mongoose.plugin(slug);
Post.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})

module.exports = mongoose.model('Post', Post);