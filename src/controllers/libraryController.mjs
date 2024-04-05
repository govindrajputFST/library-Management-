import libraryModel from "../models/libraryModel.mjs";
const findBook=async (req,res)=>{
 const books=await libraryModel.find();
 return res.send({status:"OK",message:books});
}
const createBook=async (req,res)=>{
    const  data=req.body;
    const addBooks= await libraryModel.create(data);
    return res.send({status:'ok',message:addBooks});
}
export {findBook,createBook}