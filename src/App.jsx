import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Users1 from './components/Users1'; // Import all the components
import Kyc from './components/Kyc';
import Activate1 from './components/Activate1';
import Create from './components/Create';
import UpdateClient from './components/UpdateClient';
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
          <Route path="Kyy" element={<Kyc />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<UpdateClient />}/>
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
