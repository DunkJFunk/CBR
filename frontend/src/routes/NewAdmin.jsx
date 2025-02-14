import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import BoatUpload from '../components/BoatUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const NewAdmin = () => {
    const { user, isAuthenticated, isLoading, error, logout } = useAuth0();
    const [boatSet, setBoatSet] = useState(null)
    const [category, setCategory] = useState("All")
    const [isGalleryLoading, setIsGalleryLoading] = useState(false);


    const handleDelete = async (id) => {
      try {
        const response = await fetch(`http://localhost:8080/boats/${id}`, {
          method: 'DELETE'
        })
        handleGenerate()
      } catch (error) {
        console.error(error)
      }
    }

    const handleGenerate = () => {
      if (category === "All") {
        handleAll()
      } else if (category === "chriscraft") {
        handleTag("chriscraft")
      } else if (category === "century") {
        handleTag("century")
      } else if (category === "5200bottoms") {
        handleTag("5200bottoms")
      } else if (category === "other") {
        handleTag("other")
      } else {
        handleAll()
      }
    }
  
    const handleTag = async (tag) => {
      try {
        const response = await fetch(`http://localhost:8080/boats/tag/${tag}`)
        const data = await response.json()
        setBoatSet(data)
      } catch (error) {
        console.error(error)
      }
    }
  
    const handleAll = async () => {
      try {
        const response = await fetch("http://localhost:8080/boats")
        const data = await response.json()
        setBoatSet(data)
      } catch (error) {
        console.error(error)
      }
    }
  

    useEffect(() => {
      setIsGalleryLoading(true);
      handleGenerate();
      if (handleGenerate()) {
          setIsGalleryLoading(false);
      }
  }, [category]);

  return (
    isAuthenticated && (
    <div className='min-h-[91lvh] max-h-[150lvh] w-full flex justify-center align-middle items-center relative'>
        {error && <div>{error.message}</div>}
        {!error && isLoading && <div>Loading...</div>}
        {!error && !isLoading && (
            <div className='mt-24 flex flex-row gap-10 max-w-2/3'>
                <button className='fixed top-28 right-10 text-slate-900 font-bold font-gopher text-2xl z-10'
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Logout
                </button>
                <BoatUpload/>
                <div>
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
                <div className='grid md:grid-cols-3 grid-cols-1 mx-6 gap-x-6 gap-y-6 overflow-scroll max-h-[100lvh] p-6'>
                  {boatSet && boatSet.map(
                    (boat) => (
                      <Link to={`/gallery/${boat.serialnum}`}>
                        <div className='bg-white rounded-md p-2 relative hover:scale-110'>
                          <div key={boat.id}>
                            <h1 className='text-center pb-1'>{boat.name}</h1>
                            <img className='max-h-36 rounded-md' src={boat.images[0]} alt={boat.name} />
                            <button onClick={() => (handleDelete(boat.serialnum))} className=' text-red-600 absolute bottom-2 right-4 font-bold text-xl'><FontAwesomeIcon icon={faTrash} className="h-5 text-red-500"/></button>
                          </div>
                        </div>
                      </Link>
                    )
                  )}
                </div>
                </div>
                {/* {user?.picture && <img src={user.picture} alt={user?.name} />}
                <p>{user?.name}</p> */}
            </div>
        )}
    </div>
    )
  )
}

export default NewAdmin