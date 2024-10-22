const getAllBlogs = require('./blogController')

exports.getIndexPage = async (req, res)=>{
    try{
      const Blogs = await getAllBlogs.adminGetAllBlog(req, res);
      res.render('userBlogs', {
        title: 'My Blogs',
        Blogs: Blogs,
        user: res.locals.user
      })
    }catch (err){
      console.log(err)
    }
  }