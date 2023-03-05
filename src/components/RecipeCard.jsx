import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeCard.css'

const RecipeCard = ({ recipes }) => {
    console.log(recipes);

    const navigate = useNavigate();

    const mappedRecipe = recipes.map(recipe => {
        return (
            <div className='recipe-card-container'>
                <img src={recipe.image_url} />
                <h2>{recipe.recipe_name}</h2>
                <button onClick={() => navigate(`/detailScreen/${recipe.recipe_id}`)}>See More</button>
            </div>
        )
    })

    // console.log(mappedRecipe);

    return (
        <div className='recipe-card-master'>
            {mappedRecipe}
        </div>
    )
}

export default RecipeCard