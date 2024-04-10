import React from 'react'
import Cards from './Cards'
import Grid from '@mui/material/Grid'

export default function ContainCard({ characters }) {
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
        </>
    )
}
