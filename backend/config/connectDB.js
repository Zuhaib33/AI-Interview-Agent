import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

const connectDB = async () => {
	try {

		await mongoose.connect("mongodb+srv://zuhaib:agnet414@cluster0.eesb6jt.mongodb.net");
		console.log('MongoDB connected');
        
	} catch (error) {
		console.error('MongoDB connection failed:', error.message);
		
	}
};

export default connectDB;
