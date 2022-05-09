import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import RecipeCard from './RecipeCard';

const Recipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:3010/recipes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Axios error: ', err);
      });
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <div className="recipeList">
        {data.map((recipe) => (
          <RecipeCard {...recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};
export default Recipes;
