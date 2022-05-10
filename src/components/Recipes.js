import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import RecipeCard from './RecipeCard';

const Recipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFiltered] = useState(data);

  const searchHandler = (e) => {
    const resut = data.filter((entry) => {
      if (entry.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return entry;
      }
    });
    setFiltered(resut);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:3010/recipes')
      .then((res) => {
        setData(res.data);
        setFiltered(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Axios error: ', err);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Recipes</h1>
      <div className="search">
        <label htmlFor="serach">Search for recipe:</label>
        <input
          type="text"
          name="search"
          onChange={searchHandler}
          defaultValue=""
        />
      </div>

      <div className="recipeList">
        {filteredData.map((recipe) => (
          <RecipeCard {...recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};
export default Recipes;
