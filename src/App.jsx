import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Users1 from './components/Users1'; // Import all the components
import Activate1 from './components/Activate1';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarToggle, setSideBarToggle] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <div className="flex">
                <Sidebar sidebarToggle={sidebarToggle} />
                <Dashboard
                  sidebarToggle={sidebarToggle}
                  setSideBarToggle={setSideBarToggle}
                />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          {/* Nested routes for components to display inside Dashboard */}
          <Route path="users" element={<Users1 />} />
          <Route path="activate" element={<Activate1 />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
