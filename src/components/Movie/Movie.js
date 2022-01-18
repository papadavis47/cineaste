import React from "react";

const movie = [
  {
    name: "Platoon",
    director: "Oliver Stone",
    genre: "Drama",
    memories: "Seeing it for the first time with my Dad in '87 before Mom died",
    decadeCreated: "1980s",
  },
];

const Movie = () => {
  const { name, director, genre, memories, decadeCreated } = movie[0];
  return (
    <div className='flex flex-col p-5 m-2 text-lg text-white border-4 rounded-md bg-sky-700 border-sky-300'>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <h2>
        Directed by: <span className='font-bold'>{director}</span>
      </h2>
      <p>
        Genre: <span className='font-bold'>{genre}</span>
      </p>
      <p>
        Decade Created: <span className='font-bold'>{decadeCreated}</span>
      </p>
      <p>
        Memories: "<span className='italic'>{memories}</span>"
      </p>
    </div>
  );
};

export default Movie;
