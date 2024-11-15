import React, { useState } from 'react'
import Card from './Card.jsx'
import { boats } from "./Boats.js";

const createBoat = (boat) => {
    return <Card
    key={boat.id}
    serialNum={boat.serialNum}
    name={boat.name}
    images={boat.images}
  />
}

const Work = () => {
  const [boatSet, setBoatSet] = useState(boats)
  const handleLoad = async () => {
    try {
      const response = await fetch("http://localhost:8080/boats")
      const data = await response.json()
      setBoatSet(data)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    handleLoad();
  }, []);
  
  return (
    <div className="flex flex-wrap justify-center align-middle bg-owhite pt-14 pb-60 scroll-m-32" id="work">
      <div className="grid md:grid-cols-3 grid-cols-1 mx-6 md:mx-20 gap-x-20 gap-y-8">
        {boatSet.slice(0, 6).map(createBoat)}
      </div>
    </div>
  )
}

export default Work