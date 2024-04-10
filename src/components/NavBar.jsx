import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function NavBar({ getCharacterByStatus }) {


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
                    <Button value="alive" onClick={() => getCharacterByStatus("Alive")}>Alive</Button>
                    <Button onClick={() => getCharacterByStatus("Dead")}>Dead</Button>
                    <Button onClick={() => getCharacterByStatus("unknown")}>Unknown</Button>
                    <Button onClick={() => getCharacterByStatus(" ")}>All</Button>
                </ButtonGroup>
            </Box>
        </>
    )
}
