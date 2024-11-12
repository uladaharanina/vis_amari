// src/utils/loadAssets.js
import fs from 'fs';
import path from 'path';


// Function to get all assets from the "public/preview" and "public/packages" directories
export const getAssets = async () => {
    const previewfolderPath = path.join(process.cwd(), 'public/preview');
    const packagesfolderPath = path.join(process.cwd(), 'public/packages');

    // Read the directory and filter out only image files
    try{
        const previewFilesDir = await fs.readdir(previewfolderPath);
        const packageFiles = await fs.readdir(folderPath);
    
        const previewFiles = previewFilesDir.filter(file =>
        /\.(jpg|jpeg|png|gif)$/i.test(file)); // Ensure only image files are included
        return previewFiles;

    }
    catch(err){
        console.error("Error reading preview and package directories:", err);
        return [];
    }
    

};
