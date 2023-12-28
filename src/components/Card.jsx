import React from "react";

function Card(boat) {    
    const ellipsis = (str, length) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }
    return (
    <div className="flex flex-col md:flex-row mx-4 border-4 border-slate-900 rounded-lg bg-white hover:bg-eowhite overflow-hidden mb-6 px-6 py-6 md:max-h-80">
        <div className="flex flex-col md:text-right mx-8 max-w-md">
            <h1 className="text-2xl font-bold mt-4">{boat.name}</h1>
            <p className="text-xl overflow-hidden text-ellipsis">{ellipsis(boat.content, 300)}</p>
        </div>
        <img className="border-4 border-slate-900 rounded" src={boat.img} alt={boat.name} />
    </div>
    )
}

export default Card;
