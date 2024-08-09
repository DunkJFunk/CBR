import React from "react";
import { Link } from "react-router-dom";

function Card(boat) {    
  const ellipsis = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  
  return (
    <Link to={`about/${boat.tagNum}`}>
      <div className="flex flex-col max-w-md mx-auto bg-white border-4 border-slate-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover" src={boat.img} alt={boat.name} />
        </div>
        <div className="flex p-4">
          <p className="self-center text-center w-full mt-1 text-2xl leading-tight font-medium text-black hover:underline">{boat.name}</p>
          <p className="hidden mt-2 text-gray-500">{ellipsis(boat.content, 300)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;