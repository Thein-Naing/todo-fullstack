// import all dependencies.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const Todo   = require('./models/Todo');
const todoRoutes = require('./routes/todoRoutes');

// create express app.
const app = express();

//middleware.
app.use(express.json());
app.use(cors());
app.use('/api/todos', todoRoutes);

//create PORT.
PORT = process.env.PORT || 5500;

//connect mongoose database.
mongoose.connect(process.env.MONGO_URI)
.then((req, res) => {
  console.log('Database is connected...')}
)


//listen to requests alias connect to server.
app.listen(PORT, ()=> {
console.log(`Server is connected on port ${PORT}`);
});
