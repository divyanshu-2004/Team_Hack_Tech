import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  companyName: String,
  location: String,
  salaryRange: String,
  jobDescription: String,
  requiredSkills: String,
  experienceLevel: String,
  jobType: String,
  postingDate: String,
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
