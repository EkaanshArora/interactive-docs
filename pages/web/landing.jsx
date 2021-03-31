import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import components from '../../MDXComponents';
import theme from '../../components/theme'
import Header from '../../components/Header'
import Sidebar from '../../MDXComponents/Sidebar';
import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
function MyApp() {
    const [toggle, setToggle] = useState('false');
    return (
        <ThemeProvider theme={theme}>
            <div style={{ "display": "flex", "flexDirection": "row", "maxWidth": "1343px", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "80px" }}>
                <Sidebar></Sidebar>
                <div style={{marginLeft:'260px'}}>
                    <Typography style={{ fontWeight: '600', }} gutterBottom variant={'h1'} >API Reference - Overview</Typography>
                    <div style={{marginBottom: '28px'}}>
                        <p style={{fontWeight:'600', display:'inline-block', marginRight: '15px', fontSize:'18px'}}>Group by: </p>
                        <Button onClick={()=>setToggle(!toggle)} disabled={toggle ? true : false} color={toggle ? "primary" : "outlined"} style={toggle ? {padding: '5px 15px', marginRight: '15px',color:'#fff', backgroundColor: '#0c9efd'}:{ padding: '5px 15px', marginRight: '15px'}}>Features</Button>
                        <Button onClick={()=>setToggle(!toggle)} disabled={!toggle ? true : false} color={!toggle ? "primary" : "outlined"}  color="primary" style={!toggle ? {color:'#fff', backgroundColor: '#0c9efd', padding: '5px 15px'}:{padding: '5px 15px'}}>Library Globals</Button>
                    </div>
                    <img src={toggle ? "/Group 6.png" : "/Group 8.png"} style={{width: '90%'}}></img>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MyApp
