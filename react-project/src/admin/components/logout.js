
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        navigate('/admin/login');
    }, []);
    return null;
}
export default Logout;