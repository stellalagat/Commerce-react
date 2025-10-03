// src/pages/RoleSelection.jsx
import { Link } from "react-router-dom";

function RoleSelection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Choose Your Role</h2>
      <div className="grid grid-cols-2 gap-6">
        <Link to="/dashboard/customer" className="bg-white shadow p-6 rounded-lg text-center hover:shadow-lg transition">
          🛍 Customer
        </Link>
        <Link to="/dashboard/wholesaler" className="bg-white shadow p-6 rounded-lg text-center hover:shadow-lg transition">
          📦 Wholesaler
        </Link>
        <Link to="/dashboard/businessman" className="bg-white shadow p-6 rounded-lg text-center hover:shadow-lg transition">
          💼 Businessman
        </Link>
        <Link to="/dashboard/service" className="bg-white shadow p-6 rounded-lg text-center hover:shadow-lg transition">
          🛠 Service Provider
        </Link>
      </div>
    </div>
  );
}

export default RoleSelection;
