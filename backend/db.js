const express = require("express")
const mongoose = require("mongoose")
// const app = express()
const mongoURI = "mongodb://localhost:27017/GoFood"
const mongoDB = async()=>{
  await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log("Connected")
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function(err,data){
        const foodCategory = await mongoose.connection.db.collection("category");
        foodCategory.find({}).toArray(function(err,catData){
          if(err){
            console.log(err);  
          }
          else{
            // console.log(data);
            global.food_items = data;
            global.foodCategory = catData;
          }

        })


        // if(err){
        //   console.log(err);  
        // }
        // else{
        //   // console.log(data);
        //   global.food_items = data;
        // }
      }) 
    }
  })

  
}

// mongoose.connect("mongodb://localhost:27017/GoFood",{useNewUrlParser:true})


module.exports = mongoDB;