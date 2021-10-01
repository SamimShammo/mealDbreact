import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './Food.css'

const Food = () => {

    const {idmeald} = useParams()
    const [newId, setId] = useState([])
    useEffect(() => {
        const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeald}`
        fetch(url)
        .then(res => res.json())
        .then(data => setId(data.meals[0]))
    }, [])
    console.log(newId)

    const history = useHistory()
    const goFoodDetaill = () => {
        history.push(`/search`)
    }
    
    return (
        <Container>
        <div className="newFood">
        
    <Grid item xs={4} >
     <Card >
      <CardMedia
        component="img"
        height="250"
        image={newId.strMealThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {newId.strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <button onClick={goFoodDetaill} className="link-style" variant="outline-danger">See all Food</button>
       
      </CardActions>
      </Card>
      </Grid>
    </div>
    </Container>
    );
};

export default Food;