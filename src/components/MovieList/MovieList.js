import { useState } from "react";
import Movie from "../Movie";
import { moviesData } from "../../data/data.js";

const MovieList = (props) => {
  const [movies, setMovies] = useState([...moviesData]);
  const { id, title, description, notes } = props;
  return (
    <div className='flex flex-col w-1/2 p-4 mt-5 bg-blue-900 border-4 border-sky-200' key={id}>
      <div className='text-white'>
        <h1 className='mb-3 text-4xl font-bold text-center text-white'>{title}</h1>
        <h2 className='mb-3 ml-3 text-2xl italic max-width-fit'>{description}</h2>
      </div>
      {movies.map((movie) => {
        return <Movie key={movie.id} {...movie} />;
      })}
      <div>
        <p className='my-3 ml-3 text-2xl italic text-white max-width-fit'>"{notes}"</p>
      </div>
    </div>
  );
};

export default MovieList;
