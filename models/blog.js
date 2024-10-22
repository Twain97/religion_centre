const mongoose = require('mongoose')
const schema = mongoose.Schema;

const blogSchema = new schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'canceled'],
        default: 'pending'
      }
},
{
    timestamps:true
})

const blog = mongoose.model('Blog', blogSchema)

module.exports = blog