var express = require('express');
var router = express.Router();
let userHelper = require('../helpers/userHelper')
const jwt = require('jsonwebtoken')

async function checkUserToken(req,res,next){
 
  const userToken = req.headers.authorization;
  try{
    const decodedToken = jwt.verify(userToken,process.env.JWT_TOKEN)
    req.decodedToken = decodedToken;
    next();
  }catch(err){
    res.status(400).json({message:"Don't mess with the token"})
  }
 
}

/* GET users listing. */
router.post('/signUp', function(req, res, next) {

  const details = req.body.details

  userHelper.createUser(details).then(response=>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(err)
  })
});


router.post('/signIn',(req,res)=>{
  const details = req.body.details
  userHelper.aunthenticateUser(details).then(response=>{
    userHelper.creatUserToken(response).then(token=>{
      res.status(200).json(token)      
    }).catch(err=>{
      console.log(err)
      res.status(400).json(err)
    })
  }).catch(err=>{
    res.status(400).json(err)
  })
})

router.get('/getUserInfo',checkUserToken,(req,res)=>{
  const decodedToken = req.decodedToken.userId
  userHelper.getUserInfo(decodedToken).then(response =>{
    res.status(200).json(response)
  }).catch(err=>{
    res.status(400).json(err)
  })
})

router.post("/checkDuplicateUsername",checkUserToken,async(req,res)=>{
  const username = req.body.username;
  try{
    const isAvaillable = await userHelper.checkDuplicateUsername(username)
    res.status(200).json(isAvaillable)
  }catch(err){
    res.status(400).json({err:"err"})
  }
})

router.post("/editUsername",checkUserToken,async(req,res)=>{
  const username = req.body.username;
  console.log(req.body)
  const userId = req.decodedToken.userId;
  try{
    if(await userHelper.checkDuplicateUsername(username)){
      try{
        userHelper.editUsername(userId,username);
      }catch(err){
        res.status(400).json(err)
      }
    }
  }catch(err){
    res.status(401).json(err)
  }
 
})

router.post('/changeUserAvatar',checkUserToken,async(req,res)=>{
  const avatar = req.body.avatar;
  const userId = req.decodedToken.userId;

  userHelper.changeUserAvatar(userId,avatar).then(response=>{
    res.status(200).json({message:"avatar changed"})
  }).catch(err=>{
    res.status(400).json(err)
  })
  
})



module.exports = router;
