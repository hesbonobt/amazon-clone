
const functions=require('firebase-functions');
const express=require("express");
const cors= require("cors");
const stripe=require("stripe")
('sk_test_51NWD6hCN2JZPqomStFV9wbwGmS6NlJp6UlCxPazfLtqSQntSiEY4jGts9LNCZyVbmVo8ovkz6EKwKLLtx7hS6rTm00bojVkDQQ')


//API

//-App config
const app=express();
//-Middlewares
app.use(cors({origin:true}));
app.use(express.json());
//-API routes

app.get('/',(request,response)=>response.status(200).send('hello world'));

app.post('/payment/create',async(request,response)=>{
    const total=request.query.total;

    console.log('Payment Request Received BOOM!!! for this mount',total)

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,//subunits of the currency
        currency:"usd",
    });

    //Ok-created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})


//-Listen command
exports.api=functions.https.onRequest(app)

//example endpoint
//http://127.0.0.1:5001/contest-453cc/us-central1/api