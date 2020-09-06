'use strict;';

const express = require('express'),
          app = express(),
   bodyParser = require('body-parser'),
       logger = require('morgan');
         cors = require('cors');
         Meta = require('html-metadata-parser');


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.post('/get-meta-data',async(req,res)=>{
    try {
        //bodyParams
        const bodyParams = req.body;
        //body parameters extraction
        const {url} = bodyParams;
            //parameter checking 
        if(url){
            //extracting the result from package 
            var result = await Meta.parser(req.body.url);    
            //sending success response to user    
            res.status(200).send(result);
        }else{
            res.status(404).send({status:'failure',message: 'url canot be null!'});
        }
        
    } catch (error) {
        //sending error response to user    
        res.status(500).send(error);
    }


});

const port = 2020;
//listen for an HTTP request
app.listen(port,console.log(`The server is listening on port ${port}`));


module.exports = app;