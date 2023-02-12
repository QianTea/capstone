import { Outlet } from "react-router-dom";
import  ResponsiveAppBar  from "./components/NavBar2";
import Copyright from './components/copyright';

const Layout = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Outlet />   
            <Copyright sx={{ mt: 8, mb: 4 }} />         
        </>
    )
}

export default Layout; 