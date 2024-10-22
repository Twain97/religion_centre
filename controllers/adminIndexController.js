const getAllMembers = require('./membersController');
const getAllBlogs = require('./blogController');



exports.adminPage = async (req, res) => {
  try {
    const members = await getAllMembers.getAllMembers(req, res);
    const blogs = await getAllBlogs.adminGetAllBlog(req, res);

    res.render('adminIndex',
      { 
        title: "ADMIN", 
        members: members, 
        blogs:blogs,
        user: res.locals.user
      });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
};
