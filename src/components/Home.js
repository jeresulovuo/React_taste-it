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
    </>

    // <video
    //   src="./../assets/pexels-taryn-elliott-7172269.mp4"
    //   className="heroBanner"
    // ></video>
  );
};
export default Home;
