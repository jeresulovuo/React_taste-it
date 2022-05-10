import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="heroBanner">
        <button>
          <Link to="recipes">Recipes</Link>
        </button>
      </div>
      <Link to="recipes">Recipes</Link>
      <Link to="add-new">Add new</Link>
    </>

    // <video
    //   src="./../assets/pexels-taryn-elliott-7172269.mp4"
    //   className="heroBanner"
    // ></video>
  );
};
export default Home;
