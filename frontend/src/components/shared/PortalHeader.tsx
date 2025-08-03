import { Link, useNavigate } from 'react-router-dom';
import { PrimaryColorsLight } from '../../helper/cssHelper';
import { useEffect } from 'react';

const Header = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (!user) {
            navigate('/login');
        }
    }, []);
    const PrimaryColors = PrimaryColorsLight;
    return (
        <header className={`${PrimaryColors.primaryColor} ${PrimaryColors.primaryTextColor} shadow-md`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="text-xl font-bold">Admin Dashboard</div>
                <button onClick={()=>{sessionStorage.removeItem("user"); navigate("/login")}}>Logout</button>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className={`${PrimaryColors.primaryTextHoverColor} transition`}>Home</Link>
                    <Link to="/admin/login" className="hover:text-blue-200 transition">Login</Link>
                </nav>
                <button className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:bg-blue-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
