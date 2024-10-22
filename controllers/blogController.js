// allBlog, addBlog, deleteBlog, getABlog, about, createBlog, errPage
const Blog = require('../models/blog.js')

const allBlog = (req, res)=>{
    Blog.find().sort({createdAt:-1}).then((result)=>{
        res.render('index', {
            title:"Home", 
            blogs:result,
            user: res.locals.user
        })
    }).catch((err)=>{
        console.log(err)
    res.status(500).send('An error occurred');
    })
}

const adminGetAllBlog = async (req, res) =>{
    try{
        const blogs = await Blog.find({})
        return blogs
    }catch (err)  {
      console.error(err);
      res.status(500).send('An error occurred');
    };
}

const addBlog = async (req, res)=>{
    const {title, snippet, body, status, author} = (req.body)

    try{
        const blog = await Blog.create({
            title,
            snippet,
            body, 
            status, 
            author
        })
        res.status(201).json({blog: blog._id})
    }catch(err){
        console.log(err)
    }
}

const updateBlog = async (req, res) =>{
    const { id, title, snippet, body, status, author} = req.body

    try{
        const blog = await Blog.findByIdAndUpdate(id, {
            title,
            snippet,
            body,
            status,
            author
        }, { new : true})

        if(!blog){
            return res.status(404).json({ message: 'Blog not found'})
        }
        res.json(blog)
    }catch(err){
        console.log(err)
    }
}

const deleteBlog =  (req, res)=>{
    const id = req.params.id

    Blog.findByIdAndDelete(id).then(()=>{
        res.json({redirect:"/"})
    }).catch((err)=>{
        console.log(err)
    })
}

const getABlog = (req, res)=>{
    const id = req.params.id

    Blog.findById(id).then((result)=>{
        res.render('details', {
            title:"Blog Details", 
            blog:result,
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

const createBlog = (req, res)=>{
    res.render('create', {
        title:"Create",
        user:res.locals.user
    })
}

const errPage = (req, res)=>{
    res.status(404).render('404', {title:"Error"})
}

module.exports ={
    addBlog,
    adminGetAllBlog,
    allBlog,
    updateBlog,
    deleteBlog,
    getABlog, 
    about,
    createBlog,
    errPage
} 