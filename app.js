//import {express} from 'package.json';
const express= require('express')
//import {node-fetch} from 'package.json';
const fetch= require('node-fetch');
const app= express();

var router= express.Router();

app.listen(3000, () =>{
    console.log('starting server at port 3000');
});
// to enable parsing of json object in the body of request
app. use(express.json());
app.use(express.urlencoded({extended:true}));

//API to call another API i.e third party API

app.get('/project', async(req,res)=>{

//third party URL
const api_url= 'https://api.fyre.hypersign.id/api/v1/project/demo-event-001?isPublic=true';
const fetch_response= await fetch(api_url);
const result= await fetch_response.json();
res.json(result);

});
 
