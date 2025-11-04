const express = require('express');
const cors = require( 'cors');

const dotenv = require('dotenv');
dotenv.config();


const {dbConnect} = require("../server/config/db"); 
const tasksRouter = require('../server/routes/route');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to the database
dbConnect();

// Use the tasks router for API routes  
app.use('/api/', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
