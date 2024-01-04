import React from "react";

function Card(boat) {    
    const ellipsis = (str, length) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }
    return (
    // <div className="flex flex-col md:flex-row mx-4 border-4 border-slate-900 rounded-lg bg-white hover:bg-eowhite overflow-hidden mb-6 px-6 py-6 md:max-h-80">
    //     <div className="flex flex-col md:text-right mx-8 max-w-md">
    //         <h1 className="text-2xl font-bold mt-4">{boat.name}</h1>
    //         <p className="text-xl overflow-hidden text-ellipsis">{ellipsis(boat.content, 300)}</p>
    //     </div>
    //     <img className="border-4 border-slate-900 rounded" src={boat.img} alt={boat.name} />
    // </div>
    <div class="max-w-md mx-auto bg-white border-4 border-slate-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-cover md:h-full md:w-48" src={boat.img} alt="Man looking at item at a store" />
        </div>
        <div class="p-8">
          <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{boat.name}</p>
          <p class="mt-2 text-gray-500">{ellipsis(boat.content, 300)}</p>
        </div>
      </div>
    </div>
    );
};

export default Card;
