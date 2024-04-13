import Header from './components/Header';
import ContainCard from './components/ContainCard';
import Footer from './components/Footer';
import Container from '@mui/material/Container'
import DetailCharacter from './components/DetailCharacter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
