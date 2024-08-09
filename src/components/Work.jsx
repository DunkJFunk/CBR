import React from 'react'
import Card from './Card.jsx'
import { boats } from "./Boats.js";

const createBoat = (boat) => {
    return <Card
    key={boat.key}
    tagNum={boat.tagNum}
    name={boat.name}
    content={boat.content}
    img={boat.img[0]}
  />
}

const Work = () => {
  return (
    <div className="flex flex-wrap justify-center align-middle bg-owhite pt-14 pb-60">
      <div className="grid md:grid-cols-3 grid-cols-1 mx-6 md:mx-20 gap-x-20 gap-y-8">
        {boats.map(createBoat)}
      </div>
    </div>
  )
}

export default Work