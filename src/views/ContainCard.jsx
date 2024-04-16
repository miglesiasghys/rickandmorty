import React from 'react'
import Cards from '../components/Cards'
import { Grid, Pagination, Stack } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ContainCard() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const { filterStatus } = useParams()

  useEffect(() => {
    axios(
      `https://rickandmortyapi.com/api/character/?page=${page}&${filterStatus ? `status=${filterStatus}` : ""}`)
      .then(({ data }) => {
        setTotalPages(data.info.pages)
        setCharacters(data.results)
      })
  }, [filterStatus, page])

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}>
        {characters ? characters.map((character) =>
          <Cards
            key={crypto.randomUUID()}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
          />
        ) : null}
      </Grid>
      <Stack spacing={2} >
        <Pagination color='primary' sx={{ p: "20px" }} count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </>
  )
}
