const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
var results = [];
const port = process.env.PORT||5510;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/v1/isAlive', (req, res) => res.send('<h1>API is Alive. Jo Bhi kaam hain bolo</h1>'));
app.get('/api/v1/getDir',(req,res)=> {
    results=[];
    fs.createReadStream('TeamData.csv')
    .pipe(csv({}))
    .on('data',(data)=>{
      results.push(data)
    })
    .on('end',()=>{
      console.log(results[0]);
      res.send(results);
    });

    
});

app.get('/api/v1/getDir2',(req,res)=> {
  results=[];
  fs.createReadStream('2ndYRDATA.csv')
  .pipe(csv({}))
  .on('data',(data)=>{
    results.push(data)
  })
  .on('end',()=>{
    console.log(results[0]);
    res.send(results);
  });

  
});

app.listen(port, () => {
  console.log('Team API app listening on http://localhost:'+port);
});