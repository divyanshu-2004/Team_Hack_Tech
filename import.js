import mongoose from 'mongoose';
import Job from './models/Job.js';
import fs from 'fs/promises';

const mongoURI = 'mongodb+srv://hackteck:Divyanshupr1@cluster0.3htxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
    globalThis.process.exit(1);
  }
};

const importData = async () => {
  try {
    const data = JSON.parse(await fs.readFile('data.json', 'utf8'));

    await Job.deleteMany(); // Clear existing data
    await Job.insertMany(data);
    console.log('✅ Data Imported Successfully');
    globalThis.process.exit();
  } catch (err) {
    console.error('❌ Error Importing Data:', err);
    globalThis.process.exit(1);
  }
};

// Connect and import data
(async () => {
  await connectDB();
  await importData();
})();