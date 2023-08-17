import express from 'express';
import 'dotenv/config'

const PORT=process.env.PORT || 4000
console.log(process.env.NODE_ENV);
const app=express();

app.listen(PORT,()=>{
    console.log("Server is started at ",PORT);
});