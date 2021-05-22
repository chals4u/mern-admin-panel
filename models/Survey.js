const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SurveySchema = new Schema({
   
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

SurveySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

SurveySchema.set('toJSON', {
    virtuals: true
});

module.exports = Survey = mongoose.model("surveys", SurveySchema);
