import fs from 'fs';
import path from 'path';

/**
 * Save an image to the local file system and return a file path.
 * @param {Buffer} pic - The image buffer.
 * @returns {Promise<string>} - The file path of the saved image.
 */

async function apiSearch(n) {
    try {
        const response = await fetch(`https://www.dnd5eapi.co/api/${n}`)
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            const data = await response.json();
            return data
    } catch(error) {
        console.error(error)
    }
}

// Writes the image to the local file system
async function writePicture (pic) {
    try {
        console.log("4");
        console.log(pic);
        const fileName = `image-${Date.now()}.jpg`; // Unique file name

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
        const serialNumber = `${Date.now().toString()}-${Math.floor(Math.random() * 1001).toString()}`;

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
            serial: serialNumber,
        };
    } catch (error) {
        console.error(error)
    }
}

export { writePicture, buildBoat };