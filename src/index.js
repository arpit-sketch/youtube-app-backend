import dotenv from 'dotenv';
import connectDB from './db/index.js';


dotenv.config({
    path: '.env',
});

connectDB();









// import express from 'express';
// const app = express();

// (async () => {
//     try{
//         await mongoose.connect
//         (process.env.MONGO_URI, {
//             dbName: DbName,
//         });
//         app.on('error', (error) => {
//             console.log('Error connecting to MongoDB:', error);
//             throw error;
//         });
//         app.listen(process.env.PORT || 3000, () => {
//             console.log('Server is running on port 3000');
//         });

//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// })();