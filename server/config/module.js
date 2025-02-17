const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  moduleNo:Number,
  userId:String,
  task1:Boolean,
  task2:Boolean,
  task3:Boolean,
  task4:Boolean,
  task5:Boolean,
  task6:Boolean
})

const moduleModal = new mongoose.model("module",moduleSchema)

module.exports={moduleModal}