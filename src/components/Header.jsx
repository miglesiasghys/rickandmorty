import React from 'react'
import NavBar from './NavBar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export default function Header() {

    return (
        <>
            <AppBar position="static" sx={{
                width: "100%",
                padding: "60px 0px",
                backgroundImage: `url('https://www.pixel4k.com/wp-content/uploads/2020/01/rick-and-morty-smith-adventures_1580056495-2048x1199.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
                <Box display="flex" sx={{ height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                    <Typography variant="h1" gutterBottom sx={{ color: "#adff2f", fontFamily: "Creepster, system-ui", fontWeight: "400", fontStyle: "normal", textShadow: "2px 2px 5px black" }}>
                        Rick and Morty
                    </Typography>
                    <NavBar />
                </Box>
            </AppBar>
        </>

    )
}
