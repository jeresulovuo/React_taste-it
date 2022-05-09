import React from 'react';

const AddNewRecipe = () => {
  return (
    <form className="addNewRecipe">
      <h1>Add New Recipe</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewRecipe;
