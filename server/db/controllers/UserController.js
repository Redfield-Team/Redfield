const UserModel = require('../models/User.js');
const bcrypt = require('bcrypt');
const router = require('../routers/UserRouter.js');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
     
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if (err) {
            return res.status(500).json({error:err});
        } else{
   
    
    const newUser = new UserModel({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        password: hash,
        phoneNumber: req.body.phoneNumber,
    })

    try {
        const saveUser =newUser.save();
        res.send(saveUser)
    }catch(err){
        res.send(err)
    }
 }
})
}

const findUser = (req, res) => {
  
    User.find({email:req.body.email})
    .exec()
    .then(user =>{
        if (user.length < 1){
            return res.status(404).json({
                message: 'Auth failed',
               
               
            })
        }else{
        bcrypt.compare(req.body.password, user[0].password, (err,result)=>{
            console.log(result,"user of zero", user[0].password)
            if (err){
                return res.status(404).json({
                    message: 'Auth failed'
                })
            }
            if (result){
               const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                },
                process.env.JWT_KEY,{
                    expiresIn: "10h"
                }, )
                const data = getOneUser(req.body.email)
                console.log("data",data)
                return res.status(200).json({message: 'Auth successful',
                getUsr: getOneUser(req.body.email), 
                token: token, email:req.body.email })
            }
            
        })
    }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
           message: 'Auth failed'
        })
    })
}

const deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then(result => {
        res.status(200).json({message: "User Deleted"})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}
const updateUser = async function (req, res) {
    const user = { fName: req.body.fName, lName: req.body.lName, password: req.body.password, phoneNumber: req.body.phoneNumber };
    console.log(user);
    query = req.body.email;
    console.log(query);
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        throw err;
      } else {
        user.password = hash;
        console.log(hash);
        User.findOneAndUpdate(query, user, (err, result) => {
          if (err) {
            throw err;
          } else {
            console.log(result);
          }
        });
        res.send(user);
      }
    });

  };
  const getOneUser = function (email) {
      console.log(email, 'emaillllll')
    User.findOne({ email:email }, function (err, result) {
      if (err) {
        throw err;
      } else {
        console.log(result);
        const user = { fName: result.fName, lName: result.lName, email: result.email, phoneNumber: result.phoneNumber };
        return user;
      }
    });
  };
  module.exports = { createUser, findUser, deleteUser, updateUser, getOneUser };

