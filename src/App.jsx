import { useState, useEffect } from 'react';
import Header from './components/Header';
import ContainCard from './components/ContainCard';
import Footer from './components/Footer';
import Container from '@mui/material/Container'
import axios from "axios"

function App() {

  const [characters, setCharacters] = useState([])
  const [status, setstatus] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios(
      `https://rickandmortyapi.com/api/character/?page=${page}&${status ? `status=${status}` : ""}`)
      .then(({ data }) => {
        setCharacters(data.results)
      })
  }, [status, page])

  const getCharacterByStatus = (status) => {
    setstatus(status)
  }

  return (
    <>
      <Container maxWidth='false' sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Header getCharacterByStatus={getCharacterByStatus} />
        <ContainCard characters={characters} />
        <Footer setPage={setPage} page={page} />
      </Container>
    </>
  )
}

export default App
