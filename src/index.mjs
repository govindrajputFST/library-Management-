import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route.mjs'
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://govindrajputt0301:ZR6DIPVWrKvQKwqF@cluster0.e0xwgrr.mongodb.net/LibraryManagment").then(()=>console.log("database connected")).catch((err)=>console.log(err));
app.use('/',router);
app.listen(800,()=>{
    console.log('server started on port :',800)
})

// { "title": "The Kite Runner", "author": "Khaled Hosseini", "genre": "Fiction", "ISBN": "9781594631931", "availability": true }

// { "title": "The Book Thief", "author": "Markus Zusak", "genre": "Fiction", "ISBN": "9780375842207", "availability": true }