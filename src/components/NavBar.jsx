import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="outlined" aria-label="Basic button group" color='inherit'>
                    <Link to={"/Alive"}>
                        <Button value="alive">Alive</Button>
                    </Link>
                    <Link to={"/Dead"}>
                        <Button value="Dead">Dead</Button>
                    </Link>
                    <Link to={"/unknown"}>
                        <Button value="unknown">Unknown</Button>
                    </Link>
                    <Link to={"/"}>
                        <Button value="all">All</Button>
                    </Link>
                </ButtonGroup>
            </Box>
        </>
    )
}
