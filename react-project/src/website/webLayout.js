import { Outlet } from "react-router-dom";
// Components
import WebNav from "./webNav";
import WebFooter from "./webFooter";

// style
const styles = {
    page: {
        backgroundColor: '#24242D',
        color: '#fff',
        textAlign: 'center',
    },
    body: {
        backgroundColor: '#24242D',
        minHeright: '1000vh',
    },
};

// layout of store website
const WebLayout = () => {
    return (
        < div style={styles.page}>
            <WebNav />
            <div style={styles.body}>
                <Outlet />
            </div>
            <WebFooter sx={{ mt: 8, mb: 4 }} />
        </div>
    )
}

export default WebLayout; 