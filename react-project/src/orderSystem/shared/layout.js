import { Outlet } from "react-router-dom";
import OrderNav from "./nav";

const OrderLayout = () => {
    return (
        <>
            <OrderNav />
            
            <Outlet />      
        </>
    )
}

export default OrderLayout; 