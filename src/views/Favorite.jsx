import { useContext } from 'react'
import { Grid } from '@mui/material'
import { FavoritesContext } from '../context/FavoritesContext';
import Cards from '../components/Cards'

export default function Favorite() {
    const { favorites } = useContext(FavoritesContext)

    return (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: "center", marginTop: "20px" }}>
            {favorites ? favorites.map((favorite) =>
                <Cards
                    key={crypto.randomUUID()}
                    character={favorite}
                />
            ) : null}
        </Grid>
    )
}
