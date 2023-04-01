import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
// API
import axios from 'axios';
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TableCell,TableRow } from "@mui/material";

// styles
const mdTheme = createTheme();
const styles = {
    page: {
        backgroundColor: '#24242D',
        color: '#fff',
        textAlign: 'center',
    },
};
const body = {
    container: {
        backgroundImage: 'url(../homeTreat.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: '#fff',
        display: 'flex',
        height: '650px',
        position: 'relative',
        textAlign: 'left',
    },
    title: {
        fontSize: '70px',
        textTransform: 'uppercase',
        paddingTop: '90px',
        paddingLeft: '40px',
        lineHeight: '0.5',
    },
    subtitle: {
        fontSize: '20px',
        letterSpacing: '1px',
        paddingLeft: '40px',
        lineHeight: '0.5',
    },
    overlay: {
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.4) 50%, transparent 50%)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
};
const about = {
    title: {
        fontSize: '50px',
        textTransform: 'uppercase',
        lineHeight: '0.8',
    },
    introduction: {
        fontSize: '30px',
        lineHeight: '1',
    },
};
// special dishes
const special = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    item: {
        width: '50%',
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
    image: {
        maxWidth: '100%',
        height: 'auto',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#FFD700',
    },
    description: {
        fontSize: '16px',
    },
};
//business hour
const table = {
    table: {
        margin: "0 auto",
    },
}

const WebHome = () => {
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
                {/* body-treat */}
                <div style={body.container}>
                    <div style={body.overlay}>
                        <div style={body.title}>
                            <p>EAT. </p>
                            <p>DRINK.</p>
                            <p>RELAX.</p> </div>
                        <p style={body.subtitle}>Treat Yourself</p>
                    </div>
                </div>
                {/* body-about */}
                <div >
                    <p style={about.title}>About</p>
                    <div >
                        <p style={about.introduction}>
                            {storeInfo.description}
                        </p>
                    </div>
                </div>
                {/* body-gallery - not done*/}
                <div></div>
                {/* special dishes */}
                <div>
                    <p style={about.title}> OUR FOOD </p>
                    <p >Savor The Flavor</p>
                    <div style={special.container}>
                        <div style={special.item}>
                            <img src="..\homeTreat.png" alt="Image 1" style={special.image} />
                        </div>
                        <div style={special.itemTxt}>
                            <div style={special.title}>Lunch Special</div>
                            <div style={special.description}>
                                <p>The Valued Choice.</p>
                                <p>Avaliable before 3 pm.</p>
                                <p>Lunch Special (2 pcs): Two pieces of whitefish and chips.</p>
                                <p>$10.39</p>
                            </div>
                        </div>

                        <div style={special.itemTxt}>
                            <div style={special.title}>Shrimp Special</div>
                            <div style={special.description}>
                                <p>Served All Day</p>
                                <p>Shrimp Special</p>
                                <p>Eight pieces of shrimp and chips.</p>
                                <p>$14.89</p>
                            </div>

                        </div>
                        <div style={special.item}>
                            <img src="../homeTreat.png" alt="Image 2" style={special.image} />
                        </div>
                    </div>
                </div>
                {/* map & business hour*/}
                <div style={special.container}>
                    <div style={special.itemMap}>
                        <img src="../map.png" alt="Image 2" style={special.image} />
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
                </div>
                {/* footer */}
            </div>
        </ThemeProvider >
    )
}
export default WebHome;

