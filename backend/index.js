import  dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/connectDB.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoute.js';
import useRouter from './routes/userRoute.js';


dotenv.config();



const app = express();
const port = 8000;

app.use(cors({
	origin: 'http://localhost:5173',
	 credentials: true
}))

app.use(express.json());
app.use(cookieParser());

app.use("/api/user",authRouter);
app.use("/api/user",useRouter);


app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
    connectDB();
});

app.get ('/', (req, res) => {
	res.send('Server is running');
})





