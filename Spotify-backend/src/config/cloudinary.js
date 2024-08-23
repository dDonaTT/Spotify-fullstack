import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const connectCloudinary = async () => {
  console.log("Cloudinary Name:", `"${process.env.CLOUDINARY_NAME}"`);
  console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);

  await cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME.trim(), 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
};

export default connectCloudinary;
