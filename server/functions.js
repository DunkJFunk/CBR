import fs from 'fs';
import path from 'path';


// Writes the image to the local file system
async function writePicture (pic) {
    try {
        console.log("4");
        console.log(pic);
        const serialNumber = `${Date.now().toString()}-${Math.floor(Math.random() * 10001).toString()}`;
        const fileName = `image-${serialNumber}.jpg`; // Unique file name

        // Since where we access vs. save our images is different, we have two seperate relative paths
        const filePath = path.join('../public/media', fileName);
        const componentPath = path.join('/media', fileName);

        await fs.promises.writeFile(filePath, pic.buffer);
        console.log("4.5");
        // Return the file path or a relative URL
        return componentPath;
    } catch (error) {
        console.error(error)
    }
}

// Constructs the boat object
async function buildBoat (name, images) {
    try {
        console.log("3");
        const serialNumber = `${Date.now().toString()}-${Math.floor(Math.random() * 10001).toString()}`;

        // Ensure all images are processed before returning the boat object
        const processedImages = await Promise.all(
            images.map(async (pic) => {
                // Assuming writePicture is a function that returns a serial number or image ID
                const serial = await writePicture(pic);
                return serial;
            })
        );
        console.log("5");

        return {
            name: name,
            images: processedImages,
            serialnum: serialNumber,
            tags: [],
        };
    } catch (error) {
        console.error(error)
    }
}

export { writePicture, buildBoat };