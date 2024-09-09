const express = require("express")
const mongoose = require("mongoose")
// const app = express()
// const mongoURI = "mongodb://localhost:27017/GoFood"
const mongoDB = async()=>{
  await mongoose.connect("mongodb://localhost:27017/GoFood",{useNewUrlParser:true},async(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log("Connected")
      const fetched_data = await mongoose.connection.db.collection("category")
      fetched_data.find({}).toArray(function(err,data){
        if(err){
          console.log(err);  
        }
        else{
          // console.log(data);
        }
      })
    }
  })

  
}

// mongoose.connect("mongodb://localhost:27017/GoFood",{useNewUrlParser:true})


module.exports = mongoDB;