import { Outlet } from "react-router-dom";
// Components
import WebNav from "./components/webNav";
import NavTabs from "./components/navTab";
import WebFooter from "./pages/webFooter";
// navigation
import { useNavigate,useLocation } from "react-router-dom";
import {useEffect } from "react";

// style
const styles = {
    page: {
        backgroundColor: '#24242D',
        color: '#fff',
        // textAlign: 'center',
    },
    body: {
        backgroundColor: '#24242D',
        minHeright: '1000vh',
    },
};

// layout of store website
const WebLayout = () => {
    // always show home page first
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath == '/') navigate('/home');
    }, [navigate, location]);
    return (
        // < div style={styles.page}>
        //     <WebNav />
        //     <div style={styles.body}>
        //         <Outlet />
        //     </div>
        //     <WebFooter sx={{ mt: 8, mb: 4 }} />
        // </div>
        <div style={styles.page}>
            <WebNav />
            <NavTabs/>
        </div>
    )
}

export default WebLayout; 