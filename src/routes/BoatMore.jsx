import React, { useEffect, useState } from 'react';
import Gallery from 'react-image-gallery';
import { useParams } from "react-router-dom";

const BoatMore = () => {
    const { serialNum } = useParams(); // Extract `serialNum` from URL params
    const [isLoading, setIsLoading] = useState(false);
    const [boat, setBoat] = useState({
        id: "",
        serialnum: "",
        name: "",
        images: [""],
        tags: [""],
      }); // Start with `null` for better loading state management

    const [imageSet, setImageSet] = useState([]);
    
    // Build images for <Gallery>
    const createImgs = (images) => {
        console.log("6")
        console.log(images)
        const imgList = [];
        for (let i = 0; i < images.length; i++) {
            console.log(images[i])
            imgList.push({
                original: images[i],
                thumbnail: images[i],
            })};
        console.log("8")
        setImageSet(imgList);
        console.log("9")
        return imgList;
    };

    const fetchBoat = async () => {
        try {
            console.log("2");
            const response = await fetch("http://localhost:8080/boats/1731787080354-1253");
            console.log(response);
    
            const data = await response.json();
            console.log("4");
    
            setBoat(data); // Update the state
            return data;   // Return the data for immediate use
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    React.useEffect(() => {
        const fetchData = async () => {
            console.log("1");
            setIsLoading(true);
    
            // Fetch the boat data
            const data = await fetchBoat();
            console.log("5");
    
            // Use the returned data directly to create images
            if (data && data.images) {
                createImgs(data.images);
            }
            console.log("10");
    
            setIsLoading(false);
        };
        fetchData();
    }, [serialNum]);

    return (
        <div className="w-full bg-owhite justify-center align-middle pt-32 min-h-[91lvh]">
            <div className="max-sm:text-3xl max-sm:mb-8 flex flex-col items-center">
                { !isLoading ? (
                <>
                    <div className="text-center font-montserrat max-sm:w-full max-sm:mt-2 max-sm:px-10">
                        <h2 className="text-3xl mb-8 text-slate-900">- {boat.name} -</h2>
                    </div>
                    <div className="max-sm:max-w-md px-6">
                        <Gallery
                            items={imageSet} // Pass processed images
                            renderItem={(item) => (
                                <div className="flex self-center items-center justify-center">
                                    <img
                                        src={item.original}
                                        alt={item.description || 'Boat Image'}
                                        className="w-auto max-h-[60lvh]"
                                    />
                                </div>
                            )}
                            showFullscreenButton={true}
                            showPlayButton={false}
                        />
                    </div>
                </>
                ) : (
                    <div className="w-full bg-owhite justify-center align-middle pt-32 min-h-[91lvh]">
                        <p className="text-3xl text-slate-900 text-center">Loading...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BoatMore;
