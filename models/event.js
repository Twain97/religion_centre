const mongoose = require('mongoose')
const schema = mongoose.Schema;

const eventSchema = new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    organizer:{
        type:String,
        required:true
    },
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
        default: 'upcoming'
      }
},

{
    timestamps:true
})

const event = mongoose.model('event', eventSchema)

module.exports = event