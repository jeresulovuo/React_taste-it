import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddNewRecipe = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    author: '',
    country: '',
    description: '',
    quantity: '',
    ingredient: '',
    instructions: '',
  });
  const [countries, setCountries] = useState([]);

  const inputHandler = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setIsLoading(false);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log('Axios get countries error: ', err);
      });
  }, []);

  const postHandler = (e) => {
    axios
      .post('http://localhost:3010/recipes', newRecipe)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Axios post error: ', err);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <form className="addNewRecipe" onSubmit={postHandler}>
      <h1>Add New Recipe</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" required onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="country">Recipe is from:</label>
        <select name="country" required onChange={inputHandler}>
          {/* {countries.map((country) => console.log(country.name.official))}; */}
          {countries.map((country) => (
            <option value={country.name.official} key={country.name.official}>
              {country.name.official}
            </option>
          ))}
          {/* <option value="" hidden></option>
          <option value="Finland">Finland</option>
          <option value="Sweden">Sweden</option>
          <option value="UK">UK</option> */}
        </select>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea required name="description" onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="image">Image link</label>
        <input type="text" name="image" required onChange={inputHandler} />
      </div>
      Ingredients
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" name="quantity" required onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="ingredient">Ingredient</label>
        <input type="text" name="ingredient" required onChange={inputHandler} />
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea required name="instructions" onChange={inputHandler} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewRecipe;
