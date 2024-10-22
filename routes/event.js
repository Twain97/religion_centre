const express = require('express')
const {allEvent, addEvent, deleteEvent, getAEvent, createEvent, updateEvent} = require('../controllers/eventController.js')
const {requireAuth, checkUser, routeGuide} = require('../middlware/authMiddleware.js')
const router2 = express.Router()

router2.get('/events', checkUser, allEvent)

router2.post('/events', addEvent)

router2.get('/events/:id', checkUser, getAEvent)

router2.put( "/events",requireAuth, updateEvent)

router2.delete("/events/:id",requireAuth, deleteEvent)

router2.get('/createEvent', requireAuth, checkUser, routeGuide,  createEvent)


module.exports = router2