// src/utils/loadAssets.js
import fs from 'fs';
import path from 'path';


// Function to get all assets from the "public/preview" and "public/packages" directories
export const getAssets = async (foldername) => {

    const previewFolderPath = path.join(process.cwd(), 'public', foldername);
    console.log( "TEST: " + previewFolderPath);


    // Read the directory and filter out only image files
    try{
        const previewFilesDir = await fs.promises.readdir(previewFolderPath);
        
        const previewFiles = previewFilesDir.filter(file =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)); // Ensure only image files are included
        return previewFiles;

    }
    catch(err){
        console.error("Error reading preview and package directories:", err);
        return err;
    }
    

};
