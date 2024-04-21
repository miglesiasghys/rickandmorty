import { React, useState } from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [page, setPage] = useState(1)

  const navigate = useNavigate()

  const direccionar = (state) => {
    navigate(`/${state}`)
    setPage(1)
  }

  return (
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
        <Button value="alive" onClick={() => direccionar('Alive')}>Alive</Button>
        <Button value="Dead" onClick={() => direccionar('Dead')}>Dead</Button>
        <Button value="unknown" onClick={() => direccionar('unknown')}>Unknown</Button>
        <Button value="all" onClick={() => direccionar('')}>All</Button>
      </ButtonGroup>
    </Box>
  )
}
