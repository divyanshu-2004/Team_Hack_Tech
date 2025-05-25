import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types"; // Import PropTypes

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regist, setRegist] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy user data (Replace with real authentication)
    const userData = {
      name: "John Doe",
      dp: "https://randomuser.me/api/portraits/men/45.jpg", // Dummy profile pic
    };

    onLogin(userData);
    navigate("/"); // Redirect to home after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "transparent" }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <Link to={"/"}>
          <button style={{ float: "right" }}>
            <IoCloseSharp />
          </button>
        </Link>

        <h2 className="text-2xl font-bold text-center mb-6">{regist ? "Register" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {regist && (
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            {regist ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center mt-4">
          {regist ? "Already have an account? " : "Don't have an account? "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => setRegist(!regist)}
          >
            {regist ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
