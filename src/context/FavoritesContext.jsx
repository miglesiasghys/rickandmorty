import { createContext, useState } from 'react'

export const FavoritesContext = createContext()

const FavoritesContextProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    const addFavorites =( character )=>{
        console.log(character)
        setFavorites([...favorites, character])
    }

    const data = {
        addFavorites
    }

    return <FavoritesContext.Provider value={data}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider