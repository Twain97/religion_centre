const Member = require('../models/member');
const jwt = require('jsonwebtoken')

// handle errors
const handleErrors = (err)=>{
  console.log(err.message, err.code)
  let errors = {
    email:"",
    password:"",
    age:"",
    gender:"",
    contactInformation: ""
  }
// duplicate error code 
if(err.code==11000){
  errors.email = "Email already used"
  return errors;
}

  //validation error
  if(err.message.includes('Member validation failed')){
    Object.values(err.errors).forEach(({properties})=>{
      errors[properties.path]= properties.message
    })
  }

  return errors
}

//token
const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
  return jwt.sign({id}, 'religionCentre secret', {
    expiresIn:maxAge
  })
}


exports.getCreatePage = (req, res) => {
    // Logic to fetch any necessary data or render the appropriate view
    res.render('signUpMember', {title: 'Sign Up'});
  };

exports.signup_post = async (req, res)=>{
  const { name, email, password, role, age, gender, contactInformation } = req.body;
  try{
    const member = await Member.create({ name,email, password,role, gender, age, contactInformation });
    const token = createToken(member._id)
    res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge * 1000})

    res.status(201).json({member: member._id});
  }catch(err){
    const errors = handleErrors(err)
    res.status(400).json({errors})
  }
}

exports.signup_get = (req, res)=>{
  res.render('signUp', {title: 'Create User'})
}
  