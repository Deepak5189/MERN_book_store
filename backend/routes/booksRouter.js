const express = require("express");
const { Book } =require("../models/bookModel.js");


const router= express.Router();


router.post('/',async (request, response)=>{
  try{
    if(
      !request.body.title ||
      !request.body.cover ||
      !request.body.author ||
      !request.body.publishYear
    ){
      return response.status(400).send({
        message: 'please send all required fields: title, author, publishYear',
      });
    }
    const newBook={
      title:request.body.title,
      cover:request.body.cover,
      author:request.body.author,
      publishYear:request.body.publishYear,
    };
    const book=await Book.create(newBook);
    return response.status(201).send(book);

  }catch(error){
    console.log(error.message);
    return response.status(500).send({message:error.message})
  }
})


// Get Request 


router.get('/',async (request, response)=>{
  try{
    const books=await Book.find({});
    return response.status(200).send({
      count: books.length,
      data: books
    });
  }catch(err){
    return response.status(500).send({message: err.message});
  }
});




// router.get for a single book//


router.get('/:id',async (request, response)=>{
  const {id} = request.params;
  try{
    const book=await Book.findById(id);
    return response.status(200).json(book);
  }catch(err){
    return response.status(500).send({message: err.message});
  }
});



// router.put to update a book//

router.put('/:id',async (request,response)=>{
  try {
    if (
      !request.body.title ||
      !request.body.cover ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})


module.export=router;