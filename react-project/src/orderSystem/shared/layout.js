import { Outlet } from "react-router-dom";
import OrderNav from "./nav";

const styles = {
 iPad:{
    // width: '1180',
    // height: '820px',
 },
}
const OrderLayout = () => {
    return (
        <div style={styles.iPad}>
            <OrderNav />
            
            <Outlet />      
        </div>
    )
}

export default OrderLayout; 