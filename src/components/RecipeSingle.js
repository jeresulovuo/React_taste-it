import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeSingle = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const id = props.params.recipe[0];
    setIsLoading(true);
    axios
      .get(`http://localhost:3010/recipes/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log('Axios error: ', err);
      });
  }, []);
  return (
    <div className="recipeSingle">
      <div className="leftContainer">
        <img src={data.image}></img>
        <h2>Ingredients:</h2>
        <div className="ingredients">
          {data.quantity} {data.ingredient}
        </div>
      </div>

      <div className="rightContainer">
        <h1>{data.name}</h1>
        <div>{data.description}</div>
        <div>Author: {data.author}</div>
        <h2>Preparation</h2>
        <p>{data.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
