import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">Admin Dashboard</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/admin" className="hover:text-blue-200 transition">Dashboard</Link>
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/admin/settings" className="hover:text-blue-200 transition">Settings</Link>
          <Link to="/admin/profile" className="hover:text-blue-200 transition">Profile</Link>
          <Link to="/admin/logout" className="hover:text-blue-200 transition">Logout</Link>
        </nav>
        <button className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:bg-blue-800">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
