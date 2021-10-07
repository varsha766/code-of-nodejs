const express= require('express');
const mongoose=require('mongoose');
const Details = require('./model/details');
const app= express();

//to enable parsing of JSON object in the body of request
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const dBURI=
 'mongodb+srv://nodetest:varsha03@nodetest.dsj9j.mongodb.net/detail?retryWrites=true&w=majority'

mongoose.connect(dBURI)
 .then((result)=>{});//console.log(result));
// adding details in the database

app.get('/details', async (req,res)=>{
    await
    mongoose.connect(dBURI)
 .then((result)=>{
     console.log("Connected Successfully");
     
 });
    Details.find({},(err,doc)=>{
        console.log()
        console.log(doc);
        res.json(doc);
     mongoose.connection.close();
     console.log("Disconnected");
    });
});



app.post('/add-detail',async (req, res)=>{

await 
mongoose.connect(dBURI).then((result)=>  //const detail= (req.body);
    {
    console.log("connected successfully");
    });
    const detail= new Details(req.body);
    await detail.save().then((result)=>{
    });
      res.send(detail);
      mongoose.connection.close();
      console.log("Disconnected");
});


app.listen(3000,()=>{
    //console.log("http://localhost:3000/details");
});
    