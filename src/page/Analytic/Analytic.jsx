import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const jobColors = {
  "Software Engineer": "#4CAF50",
  "Data Analyst": "#2196F3",
  
  "UX Designer": "#9C27B0",
  
};

// Sample data (Replace with CSV data processing)
const jobData = [
  { month: "Jan", "Software Engineer": 50, "Data Analyst": 30, "UX Designer": 20 },
  { month: "Feb", "Software Engineer": 40, "Data Analyst": 35, "UX Designer": 25 },
  { month: "Mar", "Software Engineer": 60, "Data Analyst": 40, "UX Designer": 30 },
  { month: "Apr", "Software Engineer": 55, "Data Analyst": 45, "UX Designer": 35 },
  { month: "May", "Software Engineer": 65, "Data Analyst": 50, "UX Designer": 40 },
  { month: "Jun", "Software Engineer": 70, "Data Analyst": 55, "UX Designer": 45 },
  { month: "Jul", "Software Engineer": 75, "Data Analyst": 60, "UX Designer": 50 },
  { month: "Aug", "Software Engineer": 80, "Data Analyst": 65, "UX Designer": 55 },
  { month: "Sep", "Software Engineer": 85, "Data Analyst": 70, "UX Designer": 60 },
  { month: "Oct", "Software Engineer": 90, "Data Analyst": 75, "UX Designer": 65 },
  { month: "Nov", "Software Engineer": 80, "Data Analyst": 60, "UX Designer": 70 },
  { month: "Dec", "Software Engineer": 90, "Data Analyst": 90, "UX Designer": 70 },
];

const Analytic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jobData); // Replace with CSV data processing
  }, []);

  return (
    <div>
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">📊 Monthly Peak Job Openings</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(jobColors).map((job) => (
              <Bar key={job} dataKey={job} name={job} fill={jobColors[job]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytic;
