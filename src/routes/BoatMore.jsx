import React, { useEffect } from 'react';
import Gallery from 'react-image-gallery';
import {
    useParams,
} from "react-router-dom";
import { boats } from '../components/Boats';

const BoatMore = () => {
    const { key } = useParams()
    let selectedKey = parseInt(key);
    const fetchBoat = async (key) => {
        try {
            const boat = await fetch(`http://localhost:8080/boats/${key}`)
            return boat.json()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchBoat();
      }, []);
    
    const selectedBoat = boats.find(boats => boats.serialNum === selectedKey)

    const createImgs = (boat) => {     // How we organize the images from the boats array into a format that ImageGallery can use
        const images = [];  
            for (let i = 0; i < boat.img.length; i++) {   // basically for each image the boat has, we push it into the image galleries array
                images.push({original: boat.img[i], thumbnail: boat.img[i]});
            }
        return images;
    }

    const buildPictures = (paths) => {
        let images = []
        for (let i = 0; i < paths.length; i++) {
          const img = new Image();
          img.src = paths[i];
          images.push(img);
        }
        return images
      }

    return (
        <div className='w-full bg-owhite justify-center align-middle pt-32 min-h-[91lvh]'>
            <div className="max-sm:text-3xl max-sm:mb-8 flex flex-col items-center">
                <div className="text-center font-montserrat max-sm:w-full max-sm:mt-2 max-sm:px-10">
                    {selectedBoat ? (
                        <div>
                            <h2 className="text-3xl mb-8 text-slate-900">- {selectedBoat.name} -</h2>
                        </div>
                    ) : (
                        <p className="text-3xl text-slate-900">Loading...</p>
                    )}
                </div>
                <div className="max-sm:max-w-md px-6">
                    <Gallery 
                    renderItem={(item) => (
                        <div className=' flex self-center items-center justify-center'>
                          <img
                            src={item.original}
                            alt={item.description}
                            className="w-auto max-h-[60lvh]"
                          />
                        </div>
                      )}
                    items={createImgs(buildPictures(fetchBoat(selectedBoat)))} showFullscreenButton={true} showPlayButton={false}/>
                </div>
            </div>
        </div>
    );
};

export default BoatMore;