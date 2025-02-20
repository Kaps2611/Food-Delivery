const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
// app.use is a middleware
app.use('/api',require("./Routes/createUser"));

app.use('/api',require("./Routes/displayData"));


// const PORT = process.env.PORT || 5000;
// app.listen(PORT);

app.listen(port ,() =>{
  console.log(`Listening to port ${port}`)
})