import React, { useRef, useState } from 'react'

const BoatUpload = () => {
    const form = useRef(null);
    const [selectedTags, setSelectedTags] = useState([]);
    const [text, setText] = useState("");
    const maxChars = 3600;

    const handleTags = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    const handleTextChange = (e) => {
        if (e.target.value.length <= maxChars) {
          setText(e.target.value);
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formElement = form.current;
            const formData = new FormData(formElement);

            formData.append("tags", JSON.stringify(selectedTags));

            const response = await fetch('http://localhost:8080/boats', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert("Thank you! Your boat has been uploaded.");
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className='justify-center align-middle pt-24'>
        <h1 className='text-3xl font-semibold font-montserrat text-center pb-6'>Upload</h1>
        <form ref={form} onSubmit={handleSubmit} enctype="multipart/form-data" method="post" className='flex flex-col gap-4 font-montserrat text-lg pb-20 lg:pb-16 px-4 mx-auto max-w-screen-md scroll-m-24'>
            <div>
                <label htmlFor="name" className="block mb-2 text-gray-900">Boat Name:</label>
                <input id='name' type="text" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder='1948 Chris Craft Sedan' required/>
            </div>
            <div className='relative'>
                <label htmlFor="description" className="block mb-2 text-gray-900">Description: <span className='text-gray-900 text-sm'>(optional)</span></label>
                <textarea value={text} onChange={handleTextChange} id='description' type="text" name="description" maxLength={3600} className="shadow-sm min-h-min max-h-[80lvh] overflow-scroll bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder='This classic came to us....'/>
                <p className='text-gray-900 text-sm'>{text.length} / {maxChars} characters</p>
            </div>

            <h1>Tags:</h1>
            <div id='tags-area' className='flex justify-center align-middle overflow-auto gap-4'>
                <button type="button" className={`p-2 rounded-md ${
                    selectedTags.includes("chriscraft") ? "bg-gray-700 text-white" : "bg-white text-black"
                    }`}
                    onClick={() => handleTags("chriscraft")}>
                        Chris-Craft
                </button>                
                <button type="button" className={`p-2 rounded-md ${
                    selectedTags.includes("century") ? "bg-gray-700 text-white" : "bg-white text-black"
                    }`}
                    onClick={() => handleTags("century")}>
                        Century
                </button>                
                <button type="button" className={`p-2 rounded-md ${
                    selectedTags.includes("5200bottoms") ? "bg-gray-700 text-white" : "bg-white text-black"
                    }`}
                    onClick={() => handleTags("5200bottoms")}>
                        5200 Bottoms
                </button>
                <button type="button" className={`p-2 rounded-md ${
                    selectedTags.includes("other") ? "bg-gray-700 text-white" : "bg-white text-black"
                    }`}
                    onClick={() => handleTags("other")}>
                        Other
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