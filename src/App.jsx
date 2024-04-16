import Header from './components/static/Header';
import { ContainCard, DetailCharacter } from './views';
import Footer from './components/static/Footer';
import Container from '@mui/material/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  //region# Esto es una nota 

  return (
    <BrowserRouter>
      <Container maxWidth='false' sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Header />
        <Routes>
          <Route path='/' element={<ContainCard />} />
          <Route path='/:filterStatus' element={<ContainCard />} />
          <Route path='/Detail/:idCharacter' element={<DetailCharacter />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
