import React from 'react'
import Cards from '../components/Cards'
import { Grid, Pagination, Stack } from '@mui/material'
import { useEffect } from 'react'

import useCharacters from '../hooks/useCharacters'

export default function ContainCard() {

  const { characters, getCharacters, totalPages, page, handleChange, filterStatus, resetPage } = useCharacters()

  useEffect(() => { getCharacters() }, [page, filterStatus])

  // SI CAMBIA EL ESTADO, VUELVE A LA PAG 1
  useEffect(() => { resetPage() }, [filterStatus])

  return (
    <>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}>
        {characters ? characters.map((character) =>
          <Cards
            key={crypto.randomUUID()}
            character={character}
          />
        ) : null}
      </Grid>
      <Stack spacing={2} >
        <Pagination color='primary' sx={{ p: "20px" }} count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </>
  )
}
