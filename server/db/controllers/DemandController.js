const DemandModel = require('../models/Demand.js');
const router = require('../routers/DemandRouter.js');
const Demand = require('../models/Demand.js');

const createDemand = async (req, res)=> {
  const demand = new DemandModel({
    email: req.body.email,  
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
  });
  demand.save().then(()=>{
      res.status(201).json({success:true, data: demand })
  }).catch(err => {
    res.status(400).json({success: false, message:err.message})
  });
//   try {
//     const demand = new DemandModel({
//       title: req.body.title,
//       description: req.body.description,
//       location: req.body.location,
//     });
//     await demand.save();
//     const publisher = await User.findById({_id: demand.publisher})
//         publisher.postedDemands.push(demand);
//         await publisher.save();
//         res.status(200).json({success:true, data: demand })
//   } catch(err) {
//       res.status(400).json({success: false, message:err.message})
//     };
}

const getAllDemand = async (req, res)=> {
  try {
    let demand = await Demand.find({}).sort({ createdAt: -1});
    res.status(200).json(demand);
  } catch (err) {
    res.status(400).send(err)
  }
}

const getUserDemand = async (req, res)=> {
  try {
    let demand = await Demand.find({email: req.body.email});
    res.status(200).json(demand);
  } catch (err) {
    res.status(404).send(err)
  }
}



module.exports.createDemand = createDemand,
module.exports.getAllDemand = getAllDemand,
module.exports.getUserDemand = getUserDemand