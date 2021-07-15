const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/customers", {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if (err){
        console.log("Error connecting to mongodb");
    }else{
        console.log("Connected to mongodb successfully");
    }
});

const customerRouter = require('./customers/routes');

const port =process.env.CUSTOMER_SERVICE_PORT || 3000;
const app =  new express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade' );
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=> {
    console.log("Time : ",Date.now());
    next();
})

app.use((req,res, next)=> {
    console.log('Starting performance timing ');
    next();
})

app.use("/", customerRouter);

app.use((err, req, res, next) => {
    console.log('Error occured during request processing ',err.stack);
    res.status(501).send('Error occured')
})



app.listen(port, () => {
    console.log(`Customer Service is running on port ${port}`);
})