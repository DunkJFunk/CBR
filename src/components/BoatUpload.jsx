import React, { useRef } from 'react'

const BoatUpload = () => {
    const form = useRef(null);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const formElement = form.current;

            const formData = new FormData(formElement);
            const response = await fetch('http://localhost:8080/boats', {
                method: 'POST',
                body: formData
            })
            // alert("Thank you! Your boat has been uploaded.");
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='w-full justify-center align-middle pt-24'>
        <form ref={form} onSubmit={handleSubmit} enctype="multipart/form-data" method="post" className='flex flex-col gap-4 font-montserrat text-lg py-20 lg:py-16 px-4 mx-auto max-w-screen-md scroll-m-24'>
            <div>
                <label htmlFor="name" className="block mb-2 text-gray-900">Boat Name:</label>
                <input id='name' type="text" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder='1948 Chris Craft Sedan' required/>
            </div>

            <label htmlFor="images">Image:</label>
            <input type="file" name="images" accept='image/*' required />

            <button onClick={handleSubmit} type='submit' value="Submit" className='self-center w-fit py-2 px-4 rounded-md bg-white hover:bg-slate-600'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default BoatUpload