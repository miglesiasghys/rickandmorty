import { createContext, useEffect, useState } from 'react'

export const FavoritesContext = createContext()

const FavoritesContextProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    //MONTAJE 
    useEffect(() => {
        const favoritesLS = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favoritesLS)
    }, [])

    //ACTUALIZACION
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addFavorites = (character) => {
        console.log(character)
        setFavorites([...favorites, character])
    }

    const removeFavorites = (id) => {
        const newArray = favorites.filter((favorite) => favorite.id !== id)
        console.log(id)
        setFavorites(newArray)
    }

    const isFavorite = (id) => {
        const exist = favorites.some((character) => character.id === id);
        return exist
    }

    const totalFavorites = () => {
        return favorites.length
    }

    const data = {
        addFavorites,
        favorites,
        removeFavorites,
        isFavorite,
        totalFavorites
    }

    return <FavoritesContext.Provider value={data}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider