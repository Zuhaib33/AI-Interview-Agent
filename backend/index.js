import  dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDB.js';
dotenv.config();



const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
	res.send('AI interview agent API is running');
    
});




app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
    connectDB();
});
