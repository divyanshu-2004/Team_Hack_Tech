import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());


mongoose.connect(globalThis.process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/api', jobRoutes);

app.get('/', (req ,res)=>{
  res.send('API is running...')
})

const PORT = globalThis.process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
