import React, { useState, useEffect } from "react";
// API
import axios from 'axios';
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
// styles
const mdTheme = createTheme();
const styles = {
    page: {
        // backgroundColor: '#24242D',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '100px',
        position: 'relative',
    },
    background: {
        backgroundImage: 'url(../contactBG.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    title: {
        fontSize: '70px',
        textTransform: 'uppercase',
        paddingTop: '10px',
        lineHeight: '0.5',
        paddingBottom: '10px',
        paddingLeft: '35%',
    },
    txt: {
        backgroundColor: '#24242D',
        width: '450px',
        lineHeight: '100px',

    },
};
// special dishes
const special = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    item: {
        backgroundColor: '#313849',
    },
    itemTxt: {
        width: '50%',
        paddingTop: '70px',
        backgroundColor: '#313849',
    },
    itemMap: {
        width: '50%',
    },
    itemBH: {
        width: '50%',
        paddingTop: '40px',
    },
    space: { margin: '50px', },
};
//business hour
const table = {
    table: {
        margin: "0 auto",
    },
}
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
const WebContact = () => {
    // get store info
    const [storeInfo, setStoreInfo] = useState({});
        // get business hour
    const [businessHour, setBusinessHour] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const resultInfo = await axios.get('http://localhost:5500/website');
            const resultTime = await axios.get('http://localhost:5500/website/business-hours');
            setStoreInfo(resultInfo.data.data);
            setBusinessHour(resultTime.data.data);
        };
        fetchData();
    }, [setStoreInfo, setBusinessHour]);
    return (
        <ThemeProvider theme={mdTheme}>
            <div style={styles.page}>
                <div style={styles.background}>
                    <div style={styles.title}>
                        <p style={styles.txt}>
                            Contact Us
                        </p>
                    </div>
                </div>

                {/* map & business hour*/}
                <div style={special.container}>
                    {/* Address */}
                    <div style={special.itemBH}>
                        <h2>Address</h2>
                        <p>{storeInfo.address},</p>
   
                        <p>{'\u00A0'}</p>
                        <p>{'\u00A0'}</p>
                    </div>
                    {/* Contact */}
                    <div style={special.itemBH}>
                        <h2>Phone</h2>
                        <p>{storeInfo.phoneNumber}</p>
                    </div>

                    {/* business hour */}
                    <div style={special.itemBH}>
                        <h2>Find Us</h2>
                        <table style={table.table}>
                            <tbody>
                             {businessHour && businessHour.map((item, index) => (
                                <tr>
                                    <td>{`${item.dayOfWeek} `}</td>
                                    <td>{item.businessTime}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table> 
                    </div>
                    {/* map */}
                    <div style={special.itemMap}>
                        <img src="../map.png" alt="Image 2" style={special.image} />
                    </div>
                </div>
            </div>
        </ThemeProvider >
    )
}
export default WebContact;

