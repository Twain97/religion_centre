const Member = require('../models/member');

// Controller method for fetching all members
exports.getAllMembers = async (req, res) => {
  try{
    const member = await Member.find({})
    return member
  }catch (err)  {
    console.error(err);
    res.status(500).send('An error occurred');
  };
    
};

// Controller method for fetching a single member by ID
exports.getMemberById = (req, res) => {
  const { id } = req.params;

  Member.findById(id)
    .then(member => {
      if (!member) {
        return res.status(404).json({ message: 'member not found' });
      }
      res.json(member);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for creating a new member
exports.createMember = (req, res) => {
  const { name, age, gender, contactInformation } = req.body;

  const newMember = new Member({
    name,
    email,
    age,
    gender,
    contactInformation
  });

  newMember.save()
    .then(member => {
      res.status(201).json(member);
      console.log("members record created successfully")
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for updating a member
exports.updateMember = (req, res) => {
  const { id } = req.params;
  const { name, age, gender, contactInformation} = req.body;

  Member.findByIdAndUpdate(id, {
    name,
    age,
    gender,
    contactInformation,
    medicalHistory,
    insuranceDetails
  }, { new: true })
    .then(member => {
      if (!member) {
        return res.status(404).json({ message: 'member not found' });
      }
      res.json(member);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};

// Controller method for deleting a member
exports.deleteMember = (req, res) => {
  const { id } = req.params;

  Member.findByIdAndDelete(id)
    .then(member => {
      if (!member) {
        return res.status(404).json({ message: 'member not found' });
      }
      res.json({ message: 'member deleted successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred');
    });
};
