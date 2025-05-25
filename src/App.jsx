import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Analytic from './page/Analytic/Analytic';
import Home from './page/Home/Home';
import { useAuth0 } from '@auth0/auth0-react';
//import { useEffect } from 'react';

const App = () => {
  const { user, loginWithRedirect, logout, isAuthenticated, isLoading, error } = useAuth0();

  // Handle errors
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  // if(isAuthenticated){
  //   console.log(user);
  // }
  // // Redirect to login if not authenticated
  // useEffect(() => {
  //   if (!isLoading && !isAuthenticated) {
  //     loginWithRedirect({
  //       appState: { returnTo: '/home' }, // Redirect to /analytic after login
  //     });
  //   }
  // }, [isLoading, isAuthenticated, loginWithRedirect]);

  // // Show a loading indicator while Auth0 is initializing
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {/* Always render the Router */}
     
      <Router>
        <div className="bg-gray-100">
          {/* Conditionally render Navbar only if authenticated */}
          <Navbar user={user} isAuthenticated={isAuthenticated} logout={logout}/>

          <Routes>
            {/* Public Route */}
            <Route
              path="/"
              element={
                // isAuthenticated ? (
                  <Home />
                //) : (
                  //<Navigate to="/login" />
                //)
              }
            />

            {/* Protected Route */}
            <Route
              path="/analytic"
              element={
                //isAuthenticated ? (
                  <Analytic />
                //) : (
                  //<Navigate to="/" />import './App.css';
//)           
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;