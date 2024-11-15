import React, { useState } from 'react'
import Card from '../components/Card.jsx'
import { boats } from "../components/Boats.js";

const createBoat = (boat) => { 
  console.log(boat)
    return <Card
    key={boat.id}
    serialNum={boat.serialNum}
    name={boat.name}
    images={boat.images}
  />
}

const Gallery = () => {
  const [category, setCategory] = useState("All")
  const [boatSet, setBoatSet] = useState(boats)
  
  const handleAll = async () => {
    try {
      const response = await fetch("http://localhost:8080/boats")
      const data = await response.json()
      setBoatSet(data)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    handleAll();
  }, []);

  return (
    <div>
      <div id="nav-gap" className='w-full h-24' />
      <div id="categories" className='w-full text-2xl font-montserrat flex flex-row gap-10 p-8 justify-center align-middle'>
        <button className={category === "All" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("All")}>
          All</button>
        <button className={category === "Current" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("Current")}>
          Chris-Craft</button>
        <button className={category === "Previous" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("Previous")}>
          Century</button>
        <button className={category === "BTS" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("BTS")}>
          5200 Bottoms</button>
      </div>
      <div id='pagination'>
        
      </div>
      {/* 
       if category == "":
          <highlight photos>
          <mix boats>
        else:
          <highlight photos>
          <boats.filter(category)
       */}
      {category === "All" ? (
        <div>

        </div>
      ) : (
        <div></div>
      )}
      <div id='gallery' className="min-h-screen flex flex-col items-center bg-owhite">
        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12">
          {category === "All" ? (
            <>
              {
                boatSet.map((boats) => createBoat(boats))
              }
            </>
          ) : (
            <>
              {boatSet.map(createBoat)}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery