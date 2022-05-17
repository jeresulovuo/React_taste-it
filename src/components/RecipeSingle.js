import React, { useState, useEffect, useLocation } from 'react';
import axios from 'axios';

const RecipeSingle = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    const id = props.params.recipe[0];
    console.log(id);

    setIsLoading(true);
    axios
      .get(`http://localhost:3010/recipes/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        // console.log(res.data);
        // console.log(location);
      })
      .catch((err) => {
        console.log('Axios error: ', err);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="recipeSingle">
      <div className="leftContainer">
        <img src={data.image}></img>
        <h2>Ingredients:</h2>
        {data.ingredients?.map((ingredient) => {
          return (
            <div className="ingredients" key={ingredient.ingredient}>
              {ingredient.quantity} {ingredient.ingredient}
            </div>
          );
        })}
      </div>

      <div className="rightContainer">
        <h1>{data.name}</h1>
        {data.country}
        <div>
          <h2>Description: </h2>
          <p>{data.description}</p>
        </div>
        <div>
          <h2>Author: </h2>
          <p>{data.author}</p>
        </div>
        <h2>Preparation</h2>
        <p>{data.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
