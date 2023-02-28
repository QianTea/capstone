import React from "react";
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';

//style
const mdTheme = createTheme();
const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#1B1B22',
        color: '#fff',
        padding: '20px ',
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerLinks: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 ',
    },
    footerLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '14px',
        marginLeft: '10px',
    },
};
// data
const storeInfo = {
    name: 'Riverside Fish Hut',
    phone: ' (519) 653-0788',
    address: {
        Street: 'Unit-B 157 King Street West',
        City: 'Cambridge', Province: 'ON',
        PostalCode: 'N3H 1B5', Country: 'Canada',
    }
};
// footer of store website
const WebFooter = () => {
    return (
        <ThemeProvider theme={mdTheme}>
            <div style={styles.footer}>
                <div style={styles.footerLinks}>
                    <p>{storeInfo.name}</p>
                    <p>Tel:{storeInfo.phone}</p>
                    <p>
                        {storeInfo.address.Street}, {storeInfo.address.City},
                        {storeInfo.address.Province} {storeInfo.address.PostalCode},
                        {storeInfo.address.Country}
                    </p>
                    <span>&copy; 2023 {storeInfo.name}</span>
                    <a href="#" style={styles.footerLink}>Privacy Policy</a>
                    <a href="#" style={styles.footerLink}>Terms of Use</a>
                </div>
            </div>
        </ThemeProvider >
    )
}
export default WebFooter;

