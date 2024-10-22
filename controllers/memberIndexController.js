exports.getIndexPage = (req, res)=>{
    res.render('memberIndex', {
      title: 'Member page',
      user: res.locals.user
    })
  }