import React, { useRef, useState } from 'react'

const BoatUpload = () => {
    const form = useRef(null);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTags = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const formElement = form.current;

            const formData = new FormData(formElement);

            formData.append("tags", selectedTags.join(","));

            const response = await fetch('http://localhost:8080/boats', {
                method: 'POST',
                body: formData
            })

            alert("Thank you! Your boat has been uploaded.");
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='justify-center align-middle pt-24'>
        <h1 className='text-3xl font-semibold font-montserrat text-center pb-6'>Upload</h1>
        <form ref={form} onSubmit={handleSubmit} enctype="multipart/form-data" method="post" className='flex flex-col gap-4 font-montserrat text-lg pb-20 lg:pb-16 px-4 mx-auto max-w-screen-md scroll-m-24'>
            <div>
                <label htmlFor="name" className="block mb-2 text-gray-900">Boat Name:</label>
                <input id='name' type="text" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder='1948 Chris Craft Sedan' required/>
            </div>

            <h1>Tags:</h1>
            <div id='tags-area' className='flex justify-center align-middle overflow-auto gap-4'>
                <button type="button" className={`p-2 rounded-md bg-white ${
                    selectedTags.includes("Chris-Craft") ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                    onClick={() => handleTags("Chris-Craft")}>
                        Chris-Craft
                </button>                
                <button type="button" className={`p-2 rounded-md bg-white ${
                    selectedTags.includes("Century") ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                    onClick={() => handleTags("Century")}>
                        Century
                </button>                
                <button type="button" className={`p-2 rounded-md bg-white ${
                    selectedTags.includes("5200 Bottoms") ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                    onClick={() => handleTags("5200 Bottoms")}>
                        5200 Bottoms
                </button>
            </div>

            <label htmlFor="images">Images:</label>
            <input type="file" name="images" accept='image/*' required multiple />

            <button type='submit' value="Submit" className='self-center w-fit py-2 px-4 rounded-md bg-white hover:bg-slate-600'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default BoatUpload