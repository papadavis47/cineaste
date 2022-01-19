import { useState, useEffect } from "react";

const ListForm = () => {
  return (
    <div className='w-1/2 p-8 my-4 text-white bg-blue-500 border-2 rounded-md'>
      <h3 className='text-3xl font-bold text-center'>Create List</h3>
      <form>
        <div className='flex flex-col mb-5'>
          <label htmlFor='title'>List Title</label>
          <input
            type='text'
            id='title'
            name='title'
            className='px-1 py-1 border text-grey-darkest'
            placeholder='DVDs I Own'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='description'>List Description</label>
          <input
            type='text'
            name='description'
            id='description'
            className='px-1 py-1 border text-grey-darkest'
            placeholder='A list of DVDs I have aquired over the years.'
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
            placeholder='These DVDs were purchased from 2005 to the present day'
          />
        </div>
        <button type='submit' className='w-full p-3 mt-3 bg-red-500 border-white rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ListForm;
