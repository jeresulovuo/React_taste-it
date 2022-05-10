import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const { name, author, country, description, image, id } = props;
  return (
    <div className="recipe">
      <h2>{name}</h2>
      <div>{country}</div>
      <img src={image}></img>
      <p>{description}</p>
      <div>by {author}</div>

      <button>
        <Link to={id + '-' + name}>Read mode</Link>
      </button>
    </div>
  );
};
export default RecipeCard;
