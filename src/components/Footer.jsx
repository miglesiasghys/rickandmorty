import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Footer({ page, setPage }) {
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Stack spacing={2} >
            <Pagination color='primary' sx={{ p: "20px" }} count={10} page={page} onChange={handleChange} />
        </Stack>
    )
}
