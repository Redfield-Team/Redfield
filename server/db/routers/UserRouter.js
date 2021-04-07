const express = require('express');
const router = express.Router();
const User = require('../controllers/UserController.js')

router.post('/signup', User.createUser)
router.delete('/:userId',User.deleteUser)
router.post('/login',User.findUser)
router.put("/update", User.updateUser);
// router.post("/getOneUser", User.getOneUser);


module.exports = router ;