import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../RecipeCard';
import AdBanner from './AdBanner'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState({});
  const [search, setSearch] = useState('');

  console.log(recipes);

  const getRecipes = () => {
    axios.get('https://recipes.devmountain.com/recipes')
      .then(res => {
        console.log(res.data);
        setRecipes(res.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getRecipes()
  }, [])


  return (
    <div>
      <AdBanner />
      <span style={{
        textAlign: 'center'
      }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <RecipeCard recipes={recipes} />
    </div>
  )
}

export default HomeScreen