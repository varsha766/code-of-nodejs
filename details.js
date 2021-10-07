const mongoose= require('mongoose');
const Schema= mongoose.Schema
const DetailSchema= new Schema({
   
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    }
});
// creating product model with detail as in database
const Detail= mongoose.model('detail', DetailSchema)
module.exports= Detail;