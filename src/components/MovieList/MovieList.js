import React from "react";
import Movie from "../Movie";

const MovieList = () => {
  return (
    <div className='flex flex-col w-1/2 p-4 mt-5 bg-blue-900 border-4 border-sky-200'>
      {/* Line below will be replaced with a prop eventually -title to the list*/}
      <div className='text-white'>
        <h1 className='mb-3 text-4xl font-bold text-center text-white'>Movies I Love</h1>
        <h2 className='mb-3 ml-3 text-2xl italic max-width-fit'>
          This is the list of movies that mean the most to me. Nos is the time for all good men to
          come to the aid
        </h2>
      </div>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <div>
        <p className='my-3 ml-3 text-2xl italic text-white max-width-fit'>
          "This is the time for all good men to come to the aid of the party."
        </p>
      </div>
    </div>
  );
};

export default MovieList;
