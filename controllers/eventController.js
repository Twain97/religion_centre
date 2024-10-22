// allEvent, addEvent, deleteEvent, getAEvent, about, createEvent, errPage
const Event = require('../models/event.js')

const allEvent = (req, res)=>{
    Event.find().sort({createdAt:-1}).then((result)=>{
        res.render('event', {
            title:"event", 
            events:result,
            user: res.locals.user
        })
    }).catch((err)=>{
        console.log(err)
    res.status(500).send('An error occurred');
    })
}

const adminGetAllEvent = async (req, res) =>{
    try{
        const event = await Event.find({})
        return event
    }catch (err)  {
      console.error(err);
      res.status(500).send('An error occurred');
    };
}

const addEvent = async (req, res)=>{
    const {name, description, startDate, endDate, location, organizer, status} = (req.body)

    try{
        const event = await Event.create({
            name, description, startDate, endDate, location, organizer, status
        })
        res.status(201).json({event: event._id})
    }catch(err){
        console.log(err)
    }
}

const updateEvent = async (req, res) =>{
    const { id, name, description, startDate, endDate, location, organizer, status} = req.body

    try{
        const event = await Event.findByIdAndUpdate(id, {
            name, description, startDate, endDate, location, organizer, status
        }, { new : true})

        if(!event){
            return res.status(404).json({ message: 'Event not found'})
        }
        res.json(event)
    }catch(err){
        console.log(err)
    }
}

const deleteEvent =  (req, res)=>{
    const id = req.params.id

    Event.findByIdAndDelete(id).then(()=>{
        res.json({redirect:"/"})
    }).catch((err)=>{
        console.log(err)
    })
}

const getAEvent = (req, res)=>{
    const id = req.params.id

    Event.findById(id).then((result)=>{
        res.render('eventDetails', {
            title:"Event Details", 
            event:result,
            user: res.locals.user
        })
    }).catch((err)=>{
        res.status(404).render('404', {title:"Error"})
        console.log(err)
    })
}

const about = (req, res)=>{
    res.render('about', {title:"About"})
}

const createEvent = (req, res)=>{
    res.render('createEvent', {
        title:"Create Event",
        user:res.locals.user
    })
}

const errPage = (req, res)=>{
    res.status(404).render('404', {title:"Error"})
}

module.exports ={
    addEvent,
    adminGetAllEvent,
    allEvent,
    updateEvent,
    deleteEvent,
    getAEvent, 
    about,
    createEvent,
    errPage
} 