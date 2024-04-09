import libraryModel from "../models/libraryModel.mjs";
const findBook = async (req, res) => {
    try {
        const books = await libraryModel.find();
     return res.status(200).send({ status: "Status 200 Array of books matching the search criteria", message: books });
    } catch (error) {
        return res.status(400).send({ status: 'Status 400 invalid search parameter', message: error.message });
    }
}

const createBook = async (req, res) => {
    try {
        const data = req.body;
    const addBooks = await libraryModel.create(data);
     return res.status(201).send({ Success: "Status 201 Book added successful",message:addBooks })
    
    } catch (error) {
        return res.status(400).send({ Error: "Status 400 Invalid request data" })
     
    }
    
    
}
const updateBook = async (req, res) => {
    try {
        const  {id } = req.params;
        const updatedBook = await libraryModel.findByIdAndUpdate({_id:id}, {$set :{"title": "newBook" }});
        if (!updatedBook) {
            return res.status(404).send({ Error: "Status 404 Book not found" })
        }
        return res.status(200).send({ Success: " Status 200 Book updated successfully", data: updatedBook });
    } catch (error) {
        return res.status(500).send({ status: 'failed', message: error.message });
    }
}
const deleteBook = async (req, res) => {
    try {
        const {id}=req.params;
        console.log(id)
        const data = await libraryModel.findByIdAndDelete({_id:id });
        if (!data) {
            return res.status(404).send({ Error: "Status 404 Book not found" })
            }
    return res.status(200).send({ Success: "Status 200 Book updated successfully", message: data })
     
    } catch (error) {
        return res.status(500).send({status:'falied',message: error.message})
    }
}
  

export { findBook, createBook, updateBook, deleteBook }

