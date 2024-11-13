import React, { useState, useEffect } from 'react';
import '../styles/Loading.css'

const LoadingScreen = ({ assets }) => {
    const [loadedAssets, setLoadedAssets] = useState(0);
    const [totalAssets] = useState(assets.length);  // We don't need to change totalAssets, it's constant

    useEffect(() => {
        // Track loading progress of each asset
        assets.forEach((asset) => {
            const img = new Image();
            img.src = asset;
            img.onload = () => {
                setLoadedAssets((prev) => {
                    const newLoadedAssets = prev + 1;
                    const newProgress = Math.floor((newLoadedAssets / totalAssets) * 100); // Recalculate progress
                    setProgress(newProgress); // Update progress after the increment
                    return newLoadedAssets;
                });
            };
        });
    }, [assets]);

    return (
        <div className="loading-screen">
            <div className="loading-message">
                <h2>Loading...</h2>
            </div>
        </div>
    );
};

export default LoadingScreen;
