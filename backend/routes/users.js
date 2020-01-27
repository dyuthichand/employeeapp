const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find().then(users => res.json(users)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const employee_name = req.body.employee_name;
  const employee_id = req.body.employee_id;
  const employee_manager = req.body.employee_manager;
  const employee_tech = req.body.employee_tech;
  const newUser = new User({employee_name,employee_id,employee_manager,employee_tech});

  newUser.save().then(() => res.json('User added!')).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;