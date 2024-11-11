// src/utils/loadAssets.js
import fs from 'fs';
import path from 'path';

// Function to get all file paths in a folder
const getFilesInDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  return files.map((file) => path.join(dir, file));
};

// Function to get all assets from the "public/preview" and "public/packages" directories
export const getAssets = () => {
  const previewDir = path.join(process.cwd(), 'public/preview');
  const packagesDir = path.join(process.cwd(), 'public/packages');
  
  const previewAssets = getFilesInDirectory(previewDir).map((file) => '/preview/' + path.basename(file));
  const packageAssets = getFilesInDirectory(packagesDir).map((file) => '/packages/' + path.basename(file));
  
  return [...previewAssets, ...packageAssets];
};
