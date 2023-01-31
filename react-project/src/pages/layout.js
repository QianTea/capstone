import { Outlet } from "react-router-dom";
import  ResponsiveAppBar  from "../components/NavBar2";

const Layout = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Outlet />            
        </>
    )
}

export default Layout; 