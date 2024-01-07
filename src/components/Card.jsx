import React from "react";
import { Link } from "react-router-dom";

function Card(boat) {    
  const ellipsis = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="max-w-md mx-auto bg-white border-4 border-slate-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={boat.img} alt={boat.name} />
        </div>
        <div className="p-8">
            <Link to={`about/2`}>
              <p className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">{boat.name}</p>
            </Link>
          <p className="mt-2 text-gray-500">{ellipsis(boat.content, 300)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;