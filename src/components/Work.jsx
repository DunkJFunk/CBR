import React, { useState } from 'react'
import WorkCard from './WorkCard.jsx'
import { boats } from "./Boats.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";

const createBoat = (boat) => {
    if (boat.images !== undefined) {
        return <WorkCard
        key={boat.id}
        serialnum={boat.serialnum}
        name={boat.name}
        images={boat.images[0]}
      />
    }
}

const Work = () => {
  const [boatSet, setBoatSet] = useState(boats)
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithRedirect } = useAuth0();

  const handleGenerate = async () => {
    try {
      const response = await fetch("http://localhost:8080/boats")
      const data = await response.json()
      setBoatSet(data.slice(0, 6))
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
}, []);
  
  return (
    <div className="flex flex-wrap relative justify-center align-middle bg-owhite p-14 scroll-m-32" id="work">
      <div className="grid md:grid-cols-3 grid-cols-1 mx-6 md:mx-20 gap-x-20 gap-y-8">
        { !isLoading ? (
            <>
              {
                boatSet.map(createBoat)
              }
            </>
          ) : (
            <div className="text-3xl font-montserrat">Loading...</div>
          )}
      </div>
    </div>
  )
}

export default Work