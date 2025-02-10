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
        images: [],
        tags: [],
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
            <div className="max-sm:text-3xl max-sm:mb-8 flex flex-col items-center">
                {!isLoading ? (
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
                                            alt={item.description || "Boat Image"}
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
