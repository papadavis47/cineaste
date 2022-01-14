import { useState, useEffect } from "react";

const MovieForm = () => {
  return (
    <div className='w-1/2 p-8 mb-4 text-white bg-blue-500 border-2 rounded-md'>
      <h3 className='text-3xl font-bold text-center'>Add Film</h3>
      <form>
        <div className='flex flex-col mb-5'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            className='px-1 py-1 border text-grey-darkest'
            placeholder='Lawrence of Arabia'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='genre'>Genre</label>
          <input
            type='text'
            name='genre'
            id='genre'
            className='px-1 py-1 border text-grey-darkest'
            placeholder='Drama'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='director'>Director</label>
          <input
            type='text'
            name='director'
            id='director'
            className='px-1 py-1 border text-grey-darkest'
            placeholder='David Lean'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='decade'>Decade Created</label>
          <select
            name='decade'
            id='decade'
            className=' text-grey-darkest px-1 py-1.5 border border-solid rounded text-gray-400 bg-white focus:outline-none focus:text-gray-600'
          >
            <option value=''>Choose a decade. . .</option>
            <option value='dog'>Dog</option>
            <option value='cat'>Cat</option>
            <option value='hamster'>Hamster</option>
            <option value='parrot'>Parrot</option>
            <option value='spider'>Spider</option>
            <option value='goldfish'>Goldfish</option>
          </select>
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='memories'>Memories</label>
          <textarea
            type='textarea'
            name='memories'
            id='memories'
            className='px-1 py-1 border text-grey-darkest'
            rows='5'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='notes'>Additional Notes</label>
          <textarea
            type='textarea'
            name='notes'
            id='notes'
            className='px-1 py-1 border text-grey-darkest'
            rows='10'
          />
        </div>
        <button type='submit' className='w-full p-3 mt-3 bg-red-500 border-white rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
