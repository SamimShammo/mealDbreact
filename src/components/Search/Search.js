import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Result from '../Result/Result';
import './Search.css'

const Search = () => {
    const [search, setSearch] = useState('')
    const [results, setResult] = useState([])
    const searchChange = event => {
        const searchValue = event.target.value;
        setSearch(searchValue)
        console.log(searchValue)
    }
    useEffect(() => {
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setResult(data.meals))
    },[search])
   
    
    return (
        <div className="searchContainer">
            <FormControl  onChange={searchChange}
              type="text"
              placeholder="Search"
              className="mr-2 searchFeild"
             
            />
     <Container>
     <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
          {
              results.map(result =><Grid  item xs={4} > <Result key={result.idMeal} result={result}
              ></Result> </Grid>)
          }
         </Grid>
     </Container>
        </div>
    );
};

export default Search;