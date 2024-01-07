import React from 'react';
import ImageGallery from 'react-image-gallery';
import { boats } from "../components/Boats";
import {
    useParams,
} from "react-router-dom";
// maybe another boat info compiler here? like in the work component?

// const createImgs = (boat) => {     // How we create organize the images from the boats array into a format that ImageGallery can use
//     const images = [];  
//         for (let i = 0; i < boat.img.length; i++) {   // basically for each image the boat has, we push it into the image galleries array
//             images.push({original: `url(${boat.img[i]})`, thumbnail: `url(${boat.img[i]})`})
//         }
//     return images;
// }

// boats.map(createImgs)


const BoatMore = () => {
    const { key } = useParams()
    let selectedKey = parseInt(key);
    const selectedBoat = boats.find(boats => boats.key === selectedKey);
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];
    
    return (
        <div className='bg-owhite h-full'>
            <div className="flex max-sm:flex-col align-middle justify-center my-96 gap-24 bmax-sm:g-4 max-sm:pt-16">
                <div className="align-middle justify-center w-1/4 h-full max-sm:w-full max-sm:m-4">
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}/>
                </div>
                <div className="w-1/3 text-left mt-6 max-sm:w-full max-sm:mt-2 max-sm:px-10">
                    {selectedBoat ? (
                        <>
                            <h2 className="text-6xl font-bebasneue mb-5 text-slate-900">{selectedBoat.name}</h2>
                            <h2 className="font-semibold text-4xl mb-5 text-slate-900 font-bebasneue">______</h2>
                            <p className="text-3xl text-slate-900">{selectedBoat.content}</p>
                        </>
                    ) : (
                        <p className="text-3xl text-slate-900">Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BoatMore;