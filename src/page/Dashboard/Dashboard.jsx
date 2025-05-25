
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


const Dashboard = () => {
  return (
    <div>
         <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
        <ul>
          <li className="mb-2"><a href="#" className="block p-2 bg-gray-700 rounded">Dashboard</a></li>
          <li className="mb-2"><a href="#" className="block p-2 hover:bg-gray-700 rounded">Job Postings</a></li>
          <li className="mb-2"><a href="#" className="block p-2 hover:bg-gray-700 rounded">Users</a></li>
          <li className="mb-2"><a href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Market Trends</h1>
        <div className="bg-white p-4 shadow rounded-lg">
          <Line data={data} />
        </div>
      </main>
    </div>
      
    </div>
  )
}

export default Dashboard
