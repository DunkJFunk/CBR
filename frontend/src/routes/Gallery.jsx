import React, { useState } from 'react'
import Card from '../components/Card.jsx'

const createBoat = (boat) => {
  console.log(boat)
    return <Card
    key={boat.id}
    serialnum={boat.serialnum}
    name={boat.name}
    images={boat.images[0]}
  />
}

const Gallery = () => {
  const [category, setCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(false);
  const [boatSet, setBoatSet] = useState([{
    id: 0,
    serialnum: "",
    name: "",
    tags: [""],
    images: [""]
  }])
  
  const handleGenerate = () => {
    if (category === "All") {
      handleAll()
    } else if (category === "chriscraft") {
      handleTag("chriscraft")
    } else if (category === "century") {
      handleTag("century")
    } else if (category === "5200bottoms") {
      handleTag("5200bottoms")
    } else {
      handleAll()
    }
  }

  const handleTag = async (tag) => {
    try {
      const response = await fetch(`http://localhost:8080/boats/tag/${tag}`)
      const data = await response.json()
      setBoatSet(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))); // Sorting by newest first
    } catch (error) {
      console.error(error)
    }
  }

  const handleAll = async () => {
    try {
      const response = await fetch("http://localhost:8080/boats")
      const data = await response.json()
      setBoatSet(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))); // Sorting by newest first
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
      setIsLoading(true);
      handleGenerate();
      if (handleGenerate()) {
          setIsLoading(false);
      }
  }, [category]);

  return (
    <div>
      <div id="nav-gap" className='w-full h-24' />
      <div id="categories" className='w-full text-2xl font-montserrat flex flex-row gap-10 p-8 justify-center align-middle'>
        <button className={category === "All" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("All")}>
          All</button>
        <button className={category === "chriscraft" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("chriscraft")}>
          Chris-Craft</button>
        <button className={category === "century" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("century")}>
          Century</button>
        <button className={category === "5200bottoms" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("5200bottoms")}>
          5200 Bottoms</button>
        <button className={category === "other" ? "underline underline-offset-8 font-semibold" : ""} onClick={() => setCategory("other")}>
          Other</button>
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
      <div id='gallery' className="min-h-screen flex flex-col items-center bg-owhite pb-8">
        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12">
          {isLoading ? (
            <>
              {
                boatSet.map((boats) => createBoat(boats))
              }
            </>
          ) : (
            <div className="text-3xl font-montserrat">Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery