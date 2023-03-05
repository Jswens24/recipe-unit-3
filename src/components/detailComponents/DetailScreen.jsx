import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailScreen = () => {
  const [recipeDetails, setRecipeDetails] = useState({})

  const { id } = useParams();

  const getDetails = () => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then(res => {
        console.log(res.data)
        setRecipeDetails(res.data)
      })
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <section>
      <h1>{recipeDetails.recipe_name}</h1>
      <img src={recipeDetails.image_url} />
      <p>{recipeDetails.instructions}</p>
    </section>
  );
};

export default DetailScreen;
