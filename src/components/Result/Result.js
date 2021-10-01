import { Card, CardActions, CardContent, CardMedia,Typography } from '@mui/material';
import { useHistory } from 'react-router';
import './Result.css'

const Result = (props) => {

 
    const {idMeal, strArea, strCategory, strMealThumb, strInstructions, strMeal} = props.result;
    const history = useHistory()
    const goFoodDetaill = () => {
        history.push(`/Result/${idMeal}`);
    }
    return (
 
     
    
         <Card>
    
      <CardMedia
        component="img"
        height="250"
        image={strMealThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {strMeal.slice(0, 20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <button onClick={goFoodDetaill} className="link-style" variant="outline-danger">Learn More</button>
       
      </CardActions>
      </Card>
   
    
     
     
    );
    
};

export default Result;