import React from 'react';
import ImageGallery from 'react-image-gallery';
import { boats } from "../components/Boats";
import {
    useParams,
} from "react-router-dom";
import NavFollow from '../components/NavFollow';


const BoatMore = () => {
    const { key } = useParams()
    let selectedKey = parseInt(key);
    const selectedBoat = boats.find(boats => boats.tagNum === selectedKey)

    const createImgs = (boat) => {     // How we create organize the images from the boats array into a format that ImageGallery can use
        const images = [];  
            for (let i = 0; i < boat.img.length; i++) {   // basically for each image the boat has, we push it into the image galleries array
                images.push({original: boat.img[i], thumbnail: boat.img[i]})
            }
        return images;
    }
    
    return (
        <div>
        <NavFollow />
        <div className='bg-owhite h-fit justify-center align-middle pt-32 min-h-[91lvh]'>
            <div className="text-6xl font-bebasneue mb-16 text-slate-900 text-center max-sm:text-3xl max-sm:mb-8 flex flex-col items-center">
                <div className="text-center mt-6 max-sm:w-full max-sm:mt-2 max-sm:px-10">
                    {selectedBoat ? (
                        <div>
                            <h2 className="text-6xl font-bebasneue mb-8 text-slate-900">- {selectedBoat.name} -</h2>
                            <p className="hidden text-3xl text-slate-900">{selectedBoat.content}</p>
                        </div>
                    ) : (
                        <p className="text-3xl text-slate-900">Loading...</p>
                    )}
                </div>
                <div className="max-sm:max-w-md px-6">
                    <ImageGallery items={createImgs(selectedBoat)} showFullscreenButton={true} showPlayButton={false}/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BoatMore;