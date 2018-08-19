const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WidgetSchema = Schema({
    name: String,
    type: String,
    width: Number,
    height: Number,
    size: Number,
    src: String,
    style: String,
    class: String
});

module.exports = {
    model: mongoose.model('Widget', WidgetSchema),
    schema: WidgetSchema
};