/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function ImageCard({ img }) {
  const tag = img.tags.split(",");
  return (
    <div className=" max-w-sm overflow-hidden shadow-lg">
      <img src={img.largeImageURL} className="w-full" />
      <div className="py-4 px-6">
        <p className="font-bold text-xl mb-2">{img.user}</p>
        <ul>
          <li>
            <strong>Views:</strong>
            {img.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {img.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {img.likes}
          </li>
        </ul>
      </div>
      <div className="py-4 px-6 flex flex-wrap gap-y-2">
        {tag.map((tagsData,index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" >
            #{tagsData}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
