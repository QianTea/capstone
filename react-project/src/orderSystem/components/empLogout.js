
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EmpLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {

        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        navigate('/order/login');
    }, []);
    return null;
}
export default EmpLogout;