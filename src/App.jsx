import Header from './components/static/Header';
import { ContainCard, DetailCharacter } from './views';
import Footer from './components/static/Footer';
import Container from '@mui/material/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FavoritesContextProvider from './context/FavoritesContext'
import Favorite from './views/Favorite';

function App() {

  return (
    <FavoritesContextProvider>
      <BrowserRouter >
        <Container disableGutters maxWidth="xl" sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Header />
          <Routes>
            <Route path='/' element={<ContainCard />} />
            <Route path='/:filterStatus' element={<ContainCard />} />
            <Route path='/Detail/:idCharacter' element={<DetailCharacter />} />
            <Route path='/Favorite' element={<Favorite />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </FavoritesContextProvider>
  )
}

export default App
