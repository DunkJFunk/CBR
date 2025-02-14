import React, { useEffect, useState } from 'react';
import Gallery from 'react-image-gallery';
import { useParams } from "react-router-dom";

const BoatMore = () => {
    const params = useParams(); // Extract `serialNum` from URL params
    const [isLoading, setIsLoading] = useState(false);
    const [boat, setBoat] = useState({
        id: "",
        serialnum: "",
        name: "",
        description: "",
        images: [],
        tags: [],
        created_at: "",
    }); // Initialize empty arrays for cleaner handling

    const [imageSet, setImageSet] = useState([]);

    // Fetch boat details
    const fetchBoat = async () => {
        try {
            console.log("Fetching boat details...");
            const response = await fetch(`http://localhost:8080/boats/${params.key}`);
            const data = await response.json();
            console.log("Boat data fetched:", data);
            setBoat(data); // Update the state
        } catch (error) {
            console.error("Error fetching boat:", error);
        }
    };

    // Build images for <Gallery>
    useEffect(() => {
        if (boat.images && boat.images.length > 0) {
            const imgList = boat.images.map((img) => ({
                original: img,
                thumbnail: img,
            }));
            console.log("Building image set:", imgList);
            setImageSet(imgList);
        }
    }, [boat.images]); // Re-run whenever `boat.images` changes

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await fetchBoat(); // Fetch the boat data
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="w-full bg-owhite justify-center align-middle pt-32 min-h-[91lvh]">
            {!isLoading ? ( boat.description === "" ? (
                <>
                <div className="max-sm:text-3xl max-sm:mb-8 flex flex-col items-center gap-12 px-24">
                    <div className="text-center font-montserrat max-sm:w-full max-sm:mt-2 max-sm:px-10">
                        <h2 className="text-3xl text-slate-900 font-gopher">{boat.name}</h2>
                    </div>
                    <div className="max-sm:max-w-md px-6">
                        <Gallery
                            items={imageSet} // Pass processed images
                            renderItem={(item) => (
                                <div className="flex self-center items-center justify-center align-middle">
                                    <img
                                        src={item.original}
                                        alt={item.description || "Boat Image"}
                                        className="max-h-[60lvh]"
                                    />
                                </div>
                            )}
                            showFullscreenButton={true}
                            showPlayButton={false}
                        />
                    </div>
                </div>
                </>
            ) : (
                <>
                <div className="max-sm:text-3xl max-sm:mb-8 md:grid md:grid-flow-row md:grid-rows-1 md:grid-cols-3 flex flex-col-reverse items-center px-8">
                    <div className="flex flex-col text-center h-full p-4 font-montserrat max-sm:w-full max-sm:mt-2 max-sm:px-10 col-span-1">
                        <h2 className="text-3xl mb-8 text-slate-900 font-gopher font-bold">{boat.name}</h2>
                        <p className="text-xl text-slate-900 max-h-[60lvh] overflow-scroll bg-eowhite rounded-md p-2">{boat.description}</p>
                    </div>
                    <div className="max-sm:max-w-md px-6 col-span-2">
                        <Gallery
                            items={imageSet} // Pass processed images
                            renderItem={(item) => (
                                <div className="flex self-center items-center justify-center">
                                    <img
                                        src={item.original}
                                        alt={item.description || "Boat Image"}
                                        className="max-h-[60lvh]"
                                    />
                                </div>
                            )}
                            showFullscreenButton={true}
                            showPlayButton={false}
                        />
                    </div>
                </div>
                </>
            )) : (
                <div className="w-full bg-owhite justify-center align-middle pt-32 min-h-[91lvh]">
                    <p className="text-3xl text-slate-900 text-center">Loading...</p>
                </div>
            )}
        {/* <div className='w-full p-2 text-center font-montserrat'>
            {new Date(boat.created_at).getMonth()}-{new Date(boat.created_at).getDate()}-{new Date(boat.created_at).getFullYear()}
        </div> */}
        </div>
    );
};

export default BoatMore;
