import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

// ✅ Search across all fields
router.get('/jobs/search', async (req, res) => {
  const SearchParams = req.query;

  // Check if there are any search parameters provided
  if (Object.keys(SearchParams).length === 0) {
    return res.status(400).json({ error: 'At least one search query is required' });
  }

  // Create a dynamic search query object
  const searchQuery = {};

  // Dynamically add conditions to the search query based on provided parameters
  if (SearchParams.jobTitle) {
    searchQuery['Job Title'] = { $regex: SearchParams.jobTitle, $options: 'i' }; // case-insensitive search
  }

  if (SearchParams.companyName) {
    searchQuery['Company Name'] = { $regex: SearchParams.companyName, $options: 'i' }; // case-insensitive search
  }

  if (SearchParams.location) {
    searchQuery.Location = { $regex: SearchParams.location, $options: 'i' }; // case-insensitive search
  }

  if (SearchParams.salaryRange) {
    const [minSalary, maxSalary] = SearchParams.salaryRange.split('-');
    searchQuery['Salary Range'] = { $gte: Number(minSalary), $lte: Number(maxSalary) };
  }

  if (SearchParams.jobDescription) {
    searchQuery['Job Description'] = { $regex: SearchParams.jobDescription, $options: 'i' }; // case-insensitive search
  }

  if (SearchParams.requiredSkills) {
    searchQuery['Required Skills'] = { $regex: SearchParams.requiredSkills, $options: 'i' }; // case-insensitive search
  }

  if (SearchParams.experienceLevel) {
    searchQuery['Experience Level'] = { $regex: SearchParams.experienceLevel, $options: 'i' }; // case-insensitive search
  }

  if (SearchParams.jobType) {
    searchQuery['Job Type'] = { $regex: SearchParams.jobType, $options: 'i' }; // case-insensitive search
  }

  if (SearchParams.postingDate) {
    // Assuming postingDate is a string in format "YYYY-MM-DD"
    searchQuery['Posting Date'] = { $gte: new Date(SearchParams.postingDate) };
  }

  try {
    // Perform the search query
    console.log(searchQuery);
    const jobs = await Job.find(searchQuery);

    // Return the found jobs
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
