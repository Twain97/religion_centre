const express = require('express')
const {allBlog, addBlog, deleteBlog, getABlog, createBlog, updateBlog} = require('../controllers/blogController.js')
const {requireAuth, checkUser} = require('../middlware/authMiddleware.js')
const router = express.Router()

router.get('/', checkUser, allBlog)

router.post('/blogs', addBlog)

router.get('/blogs/:id', checkUser, getABlog)

router.put( "/blogs",requireAuth, updateBlog)

router.delete("/blogs/:id",requireAuth, deleteBlog)

router.get('/create', requireAuth, checkUser,  createBlog)


module.exports = router