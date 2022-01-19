import React from "react";

const CreateBtn = ({ text }) => {
  return (
    <button class='bg-blue-500 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
      {text}
    </button>
  );
};

export default CreateBtn;
