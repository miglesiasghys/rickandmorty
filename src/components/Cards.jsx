import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom'

export default function Cards({
    id,
    name,
    status,
    species,
    gender,
    image
}) {

    return (
        <>
            <Card sx={{ display: "flex", width: 400, margin: "10px", backgroundColor: "#2b2b66", boxShadow: "rgb(92,88,86) 0px 2px 5px" }}>
                <Grid container>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            alt={name}
                            height="240"
                            image={image}
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <CardContent sx={{
                            height: "85%", display: "flex", flexDirection: "column", alignItems: "stretch",
                            justifyContent: "space-evenly"
                        }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#adff2f", fontFamily: "Creepster, system-ui", fontWeight: "400", fontStyle: "normal", textShadow: "2px 2px 5px black", fontSize: "max 30px", textAlign: "center" }}>
                                {name}
                            </Typography>
                            <Chip label={status} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto", fontSize: "15px" }} />
                            <Chip label={species} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto", fontSize: "15px" }} />
                            <Chip label={gender} variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto", fontSize: "15px" }} />
                            <Link to={`/detail/${id}`}>
                                <Button variant="outlined" sx={{ margin: "2px", backgroundColor: "gray", fontFamily: "Roboto", fontSize: "15px" }}>+</Button>
                            </Link>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}
