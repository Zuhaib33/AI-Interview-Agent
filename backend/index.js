import  dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDB.js';
import cors from 'cors';
dotenv.config();



const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
	origin: 'http://localhost:5173',
}))

app.use(express.json());
app.use(cookieParser());


app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
    connectDB();
});



