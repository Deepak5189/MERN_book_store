const express = require("express");
const router= express.Router();
const bookscontroller=require('../controllers/BooksController.js');


// Post Request 
router.post('/', bookscontroller.createBook);
router.get('/',bookscontroller.getAllBooks);
router.get('/:id',bookscontroller.getBook);
router.put('/:id',bookscontroller.updateBook);


// Get Request 



// router.put to update a book//



module.exports=router;