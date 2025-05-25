import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ user,isAuthenticated ,logout }) => {
  return (
    <nav className="h-[70px] w-full bg-white text-black flex items-center justify-between shadow-lg px-10">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-2">
        <img className="h-9 w-9 rounded-full" src={logo} alt="logo" />
        <h2 className="text-lg font-semibold">Insight Hunts</h2>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-semibold">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytic">Analytic</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
      </ul>
      {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Login</button>}
      {/* Right Section: Notification Bell and User Info */}
      {isAuthenticated && <div className="flex items-center space-x-4">
        {/* User Image */}
        {user?.picture && (
          <img
            src={user.picture}
            alt="User Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        )}

        {/* User Name */}
        {user?.name && <span>{user.name}</span>}

        {/* Logout Button */}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </div>}
    </nav>
  );
};

// Define PropTypes for Navbar
Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string, // Validate that `name` is a string
    picture: PropTypes.string, // Validate that `picture` is a string (optional)
  }),
  logout: PropTypes.func.isRequired, // Validate that `logout` is a function and is required
};

// Default Props (Optional)
Navbar.defaultProps = {
  user: null, // Default value for `user`
};

export default Navbar;