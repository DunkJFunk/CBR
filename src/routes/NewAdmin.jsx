import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import BoatUpload from '../components/BoatUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const NewAdmin = () => {
    const { user, isAuthenticated, isLoading, error } = useAuth0();
    const [boatSet, setBoatSet] = useState(null)
    const [category, setCategory] = useState("All")

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

    const handleGenerate = async () => {
      try {
        const response = await fetch("http://localhost:8080/boats")
        const data = await response.json()
        setBoatSet(data)
      } catch (error) {
        console.error(error)
      }
    }

    React.useEffect(() => {
      handleGenerate();
  }, []);
  return (
    isAuthenticated && (
    <div className='min-h-[91lvh] max-h-[150lvh] w-full flex justify-center align-middle items-center'>
        {error && <div>{error.message}</div>}
        {!error && isLoading && <div>Loading...</div>}
        {!error && !isLoading && (
            <div className='mt-24 flex flex-row gap-10 max-w-2/3'>
                <BoatUpload/>
                <div>
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
                <div className='grid md:grid-cols-3 grid-cols-1 mx-6 gap-x-6 gap-y-6 overflow-scroll max-h-[100lvh] p-6'>
                  {boatSet && boatSet.map(
                    (boat) => (
                      <div className='bg-white rounded-md p-2 relative hover:scale-110'>
                      <div key={boat.id}>
                        <h1 className='text-center pb-1'>{boat.name}</h1>
                        <img className='max-h-36 rounded-md' src={boat.images[0]} alt={boat.name} />
                        <button onClick={() => (handleDelete(boat.serialnum))} className=' text-red-600 absolute bottom-2 right-4 font-bold text-xl'><FontAwesomeIcon icon={faTrash} className="h-5 text-red-500"/></button>
                      </div>
                      </div>
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