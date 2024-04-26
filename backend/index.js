const express = require("express");
const { PORT, mongoDBURL } = require('./config.js');
const mongoose = require("mongoose");
const cors = require('cors');
const booksRoutes = require('./routes/booksRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const app=express();

// CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'PUT', 'DELETE'],
  allowedHeaders:['content-type'],
}));

app.use(express.json());


// App.push method//

// middleware to handle CORS policy




// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'PUT', 'DELETE'],
//     allowedHeaders:['content-type'],
//   })
//   );
  
  // post request
  
  
  
  app.get('/',(request, response)=>{
    console.log(request);
    return response.status(234).send("Welcome to MERN project")
  });
  
  
  // app.use('/book', booksRouter);
  app.use('/auth', userRoutes);

  app.use('/books', booksRoutes)

mongoose.connect(mongoDBURL)
.then(()=>{
  console.log("App is connected to database!");
  app.listen(PORT, ()=>{
    console.log(`App is listening to port: ${PORT}`);
  });
}).catch((err)=>{
  console.log(err);
});