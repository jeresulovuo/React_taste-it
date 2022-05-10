import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const { name, author, description, country, id } = props;
  return (
    <div className="recipe">
      <h2>{name}</h2>
      <div>{country}</div>
      <p>{description}</p>
      <div>by {author}</div>

      <button>
        <Link to={name}>Read mode</Link>
      </button>
    </div>
  );
};
export default RecipeCard;
