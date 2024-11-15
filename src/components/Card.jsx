import React from "react";
import { Link } from "react-router-dom";

function Card(boat) {
  console.log(boat);
  // const ellipsis = (str, length) => {
  //   return str.length > length ? str.substring(0, length) + "..." : str;
  // };

  return (
    <Link to={`${boat.serialNum}`}>
      <div className="flex flex-col max-w-md mx-auto text-black bg-gray-50 rounded-lg shadow-md overflow-hidden md:max-w-2xl transition duration-500 hover:scale-110">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover" src={boat.images} alt={boat.name} />
        </div>
        <div className="flex flex-col p-4 text-center text-2xl leading-tight font-medium font-montserrat">
          <p className="self-center w-full mt-1">{boat.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;