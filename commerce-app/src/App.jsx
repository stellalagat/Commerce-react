// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RoleSelection from "./pages/RoleSelection";
import CustomerDashboard from "./pages/CustomerDashboard";
import WholesalerDashboard from "./pages/WholesalerDashboard";
import BusinessmanDashboard from "./pages/BusinessmanDashboard";
import ServiceProviderDashboard from "./pages/ServiceProviderDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/role-selection" element={<RoleSelection />} />

          {/* Dashboards */}
          <Route path="/dashboard/customer" element={<CustomerDashboard />} />
          <Route path="/dashboard/wholesaler" element={<WholesalerDashboard />} />
          <Route path="/dashboard/businessman" element={<BusinessmanDashboard />} />
          <Route path="/dashboard/service" element={<ServiceProviderDashboard />} />

          {/* Admin (Protected) */}
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
