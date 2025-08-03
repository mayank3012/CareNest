import React from 'react'
import { useLocation } from 'react-router-dom';
import AdminHeader from './components/shared/AdminHeader';
import Header from './components/shared/PortalHeader';


const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin/');
  const isLoginRoute = location.pathname === '/login';
  return (
    <div>
      {isLoginRoute ? null : isAdminRoute ? <AdminHeader /> : <Header />} 
      {/* You can add header/sidebar here if needed */}
      {Array.isArray(children) ? children.map((child, idx) => <React.Fragment key={idx}>{child}</React.Fragment>) : children}
    </div>
  )
}

export default Layout