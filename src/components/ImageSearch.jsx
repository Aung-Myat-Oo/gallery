import React, { useState } from 'react'

function ImageSearch({searchImg}) {
    const [text, setText] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        searchImg(text)
    }
  return (
    <div className="container">
      <form className="w-fit mx-auto py-4" onSubmit={handleSubmit}>
        <input
          className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-1 px-3 rounded-sm outline-none"
          placeholder="Search Image..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        <button
          type="submit"
          className="py-1 px-3 bg-green-300 rounded-sm ml-3"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default ImageSearch