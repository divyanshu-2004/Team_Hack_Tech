import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import Filter from "../Filter/Filter";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample job data
  const jobData = [
    {
      id: 1,
      title: "Senior Cloud Solutions Architect",
      company: "Accenture Technology",
      location: "New York, USA",
      skills: ["AWS", "Azure", "GCP"],
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Google",
      location: "San Francisco, CA",
      skills: ["Python", "TensorFlow", "PyTorch"],
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Seattle, WA",
      skills: ["Docker", "Kubernetes", "Jenkins"],
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Facebook",
      location: "Menlo Park, CA",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 5,
      title: "Backend Developer",
      company: "Microsoft",
      location: "Redmond, WA",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 6,
      title: "Full Stack Developer",
      company: "Netflix",
      location: "Los Gatos, CA",
      skills: ["React", "Node.js", "GraphQL"],
    },
    {
      id: 7,
      title: "Machine Learning Engineer",
      company: "OpenAI",
      location: "San Francisco, CA",
      skills: ["Python", "TensorFlow", "PyTorch"],
    },
    {
      id: 8,
      title: "Cybersecurity Analyst",
      company: "IBM",
      location: "Armonk, NY",
      skills: ["SIEM", "Firewalls", "Encryption"],
    },
    {
      id: 9,
      title: "Cloud Engineer",
      company: "Oracle",
      location: "Austin, TX",
      skills: ["AWS", "Azure", "Terraform"],
    },
    {
      id: 10,
      title: "Software Engineer",
      company: "Apple",
      location: "Cupertino, CA",
      skills: ["Swift", "Objective-C", "Xcode"],
    },
    {
      id: 11,
      title: "Mobile Developer",
      company: "Uber",
      location: "San Francisco, CA",
      skills: ["Kotlin", "Swift", "Flutter"],
    },
    {
      id: 12,
      title: "Data Engineer",
      company: "Twitter",
      location: "San Francisco, CA",
      skills: ["Hadoop", "Spark", "Kafka"],
    },
    {
      id: 13,
      title: "AI Research Scientist",
      company: "DeepMind",
      location: "London, UK",
      skills: ["Neural Networks", "NLP", "Computer Vision"],
    },
    {
      id: 14,
      title: "Blockchain Developer",
      company: "Coinbase",
      location: "San Francisco, CA",
      skills: ["Solidity", "Ethereum", "Hyperledger"],
    },
    {
      id: 15,
      title: "Product Manager",
      company: "Slack",
      location: "San Francisco, CA",
      skills: ["Agile", "Scrum", "JIRA"],
    },
    {
      id: 16,
      title: "UX Designer",
      company: "Adobe",
      location: "San Jose, CA",
      skills: ["Figma", "Sketch", "Adobe XD"],
    },
    {
      id: 17,
      title: "QA Engineer",
      company: "Spotify",
      location: "Stockholm, Sweden",
      skills: ["Selenium", "JUnit", "Cypress"],
    },
    {
      id: 18,
      title: "Network Engineer",
      company: "Cisco",
      location: "San Jose, CA",
      skills: ["Cisco", "Firewalls", "VPN"],
    },
    {
      id: 19,
      title: "Database Administrator",
      company: "SAP",
      location: "Walldorf, Germany",
      skills: ["MySQL", "PostgreSQL", "Oracle"],
    },
    {
      id: 20,
      title: "System Administrator",
      company: "Dell",
      location: "Round Rock, TX",
      skills: ["Linux", "Windows Server", "VMware"],
    },
    {
      id: 21,
      title: "Technical Writer",
      company: "GitHub",
      location: "San Francisco, CA",
      skills: ["Markdown", "Confluence", "GitBook"],
    },
    {
      id: 22,
      title: "Business Analyst",
      company: "Salesforce",
      location: "San Francisco, CA",
      skills: ["SQL", "Tableau", "Excel"],
    },
    {
      id: 23,
      title: "IT Support Specialist",
      company: "HP",
      location: "Palo Alto, CA",
      skills: ["Troubleshooting", "Active Directory", "Ticketing Systems"],
    },
    {
      id: 24,
      title: "Game Developer",
      company: "Epic Games",
      location: "Cary, NC",
      skills: ["Unity", "C#", "Unreal Engine"],
    },
    {
      id: 25,
      title: "AI Product Manager",
      company: "Tesla",
      location: "Palo Alto, CA",
      skills: ["AI/ML", "Product Roadmap", "Agile"],
    },
    {
      id: 26,
      title: "Cloud Security Engineer",
      company: "Dropbox",
      location: "San Francisco, CA",
      skills: ["AWS Security", "Azure Security", "GCP Security"],
    },
    {
      id: 27,
      title: "Data Analyst",
      company: "LinkedIn",
      location: "Sunnyvale, CA",
      skills: ["SQL", "Power BI", "Excel"],
    },
    {
      id: 28,
      title: "AI Engineer",
      company: "NVIDIA",
      location: "Santa Clara, CA",
      skills: ["Python", "TensorFlow", "PyTorch"],
    },
    {
      id: 29,
      title: "Cloud Architect",
      company: "Red Hat",
      location: "Raleigh, NC",
      skills: ["AWS", "Azure", "GCP"],
    },
    {
      id: 30,
      title: "Software Architect",
      company: "Intel",
      location: "Santa Clara, CA",
      skills: ["Microservices", "REST APIs", "Java"],
    },
    {
      id: 31,
      title: "Mobile App Developer",
      company: "Snap Inc.",
      location: "Santa Monica, CA",
      skills: ["Swift", "Kotlin", "Flutter"],
    },
    {
      id: 32,
      title: "Data Scientist",
      company: "Airbnb",
      location: "San Francisco, CA",
      skills: ["Python", "R", "Pandas"],
    },
    {
      id: 33,
      title: "DevOps Engineer",
      company: "Lyft",
      location: "San Francisco, CA",
      skills: ["Docker", "Kubernetes", "Jenkins"],
    },
    {
      id: 34,
      title: "Frontend Developer",
      company: "Pinterest",
      location: "San Francisco, CA",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 35,
      title: "Backend Developer",
      company: "Square",
      location: "San Francisco, CA",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 36,
      title: "Full Stack Developer",
      company: "Shopify",
      location: "Ottawa, Canada",
      skills: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: 37,
      title: "Cybersecurity Analyst",
      company: "Palantir",
      location: "Palo Alto, CA",
      skills: ["SIEM", "Firewalls", "Encryption"],
    },
    {
      id: 38,
      title: "Cloud Engineer",
      company: "Twilio",
      location: "San Francisco, CA",
      skills: ["Terraform", "Ansible", "CI/CD"],
    },
    {
      id: 39,
      title: "Software Engineer",
      company: "Zoom",
      location: "San Jose, CA",
      skills: ["Java", "Spring Boot", "Microservices"],
    },
    {
      id: 40,
      title: "Mobile Developer",
      company: "TikTok",
      location: "Los Angeles, CA",
      skills: ["Swift", "Kotlin", "Flutter"],
    },
    {
      id: 41,
      title: "Data Engineer",
      company: "Stripe",
      location: "San Francisco, CA",
      skills: ["Hadoop", "Spark", "Kafka"],
    },
    {
      id: 42,
      title: "AI Research Scientist",
      company: "Baidu",
      location: "Beijing, China",
      skills: ["Neural Networks", "NLP", "Computer Vision"],
    },
    {
      id: 43,
      title: "Blockchain Developer",
      company: "Binance",
      location: "Malta",
      skills: ["Solidity", "Ethereum", "Hyperledger"],
    },
    {
      id: 44,
      title: "Product Manager",
      company: "Asana",
      location: "San Francisco, CA",
      skills: ["Agile", "Scrum", "JIRA"],
    },
    {
      id: 45,
      title: "UX Designer",
      company: "Figma",
      location: "San Francisco, CA",
      skills: ["Figma", "Sketch", "Adobe XD"],
    },
    {
      id: 46,
      title: "QA Engineer",
      company: "Atlassian",
      location: "Sydney, Australia",
      skills: ["Selenium", "JUnit", "Cypress"],
    },
    {
      id: 47,
      title: "Network Engineer",
      company: "Juniper Networks",
      location: "Sunnyvale, CA",
      skills: ["Cisco", "Firewalls", "VPN"],
    },
    {
      id: 48,
      title: "Database Administrator",
      company: "MongoDB Inc.",
      location: "New York, USA",
      skills: ["MySQL", "PostgreSQL", "Oracle"],
    },
    {
      id: 49,
      title: "System Administrator",
      company: "VMware",
      location: "Palo Alto, CA",
      skills: ["Linux", "Windows Server", "VMware"],
    },
    {
      id: 50,
      title: "Technical Writer",
      company: "GitLab",
      location: "San Francisco, CA",
      skills: ["Markdown", "Confluence", "GitBook"],
    },
  ];

  // Filter jobs based on search query
  const filteredJobs = jobData.filter((job) => {
    const matchesCompany = job.company
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSkills = job.skills.some((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesCompany || matchesSkills;
  });

  // Function to handle button click
  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div>
    <div className="bg-gray-100 ">
      <div className="ml-[230px] mt-[20px] h-[18vh] shadow-lg w-[70vw] bg-white relative">
        <div className="ml-[20px] flex flex-col mt-2 w-full">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for products (e.g., Salesforce, AWS)"
              className="ml-[12px] w-[65vw] mt-[10px] h-[40px] placeholder:w-[60vw] placeholder:text-gray-500 pl-[10px] relative border border-gray-300"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CiSearch
              className="ml-[-30px] mt-4 cursor-pointer"
              size={30}
            />
          </div>

          <div className="ml-[20px] mt-4 flex gap-6">
            <button
              className={`p-2 rounded-[10px] flex items-center justify-center transition-colors w-[80px] h-[40px] text-xl font-medium cursor-pointer ${
                selectedButton === 1
                  ? "bg-blue-500"
                  : "border border-black bg-transparent"
              }`}
              onClick={() => handleClick(1)}
            >
              All
            </button>
            <button
              className={`p-2 rounded-[10px] flex items-center justify-center transition-colors w-[124px] h-[40px] text-xl font-medium cursor-pointer ${
                selectedButton === 2
                  ? "bg-blue-500"
                  : "border border-black bg-transparent"
              }`}
              onClick={() => handleClick(2)}
            >
              Job Posting
            </button>
            <button
              className={`p-2 rounded-[10px] flex items-center justify-center transition-colors w-[120px] h-[40px] text-xl font-medium cursor-pointer ${
                selectedButton === 3
                  ? "bg-blue-500"
                  : "border border-black bg-transparent"
              }`}
              onClick={() => handleClick(3)}
            >
              Tender
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[40px] p-6 bg-gray-100 border-1 border-gray-200 w-[64%] ml-[200px] ">
        <div className="flex">
          <h1 className="text-3xl font-bold mb-6 ml-6">Job Postings</h1>
          <h3 className="ml-[430px]">See all</h3>
        </div>
        <div className="flex gap-6">
          <div>
          {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="ml-[10px] flex-colS bg-white p-6 rounded-lg shadow-md mb-6 w-[40vw]"
          >
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-1">{job.company}</p>
            <p className="text-gray-600 mb-4 flex">
              <IoLocationOutline size={14} className="mr-2 mt-1.5" />
              {job.location}
            </p>
            <div className="flex-col gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
             
        ))}
          </div>
        
        <div className="">
            <Filter />

          </div>
        </div>
        

        {/* Display filtered job cards */}
        
       
       
      </div>
     
    </div>
 
    </div>
  );
};

export default Home;