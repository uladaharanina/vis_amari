import React, { useState, useEffect } from 'react';
import '../styles/Loading.css'

const LoadingScreen = ({ assets }) => {
    const [loadedAssets, setLoadedAssets] = useState(0);
    const [totalAssets, setTotalAssets] = useState(assets.length);

    useEffect(() => {
        // Track loading progress of each asset
        assets.forEach((asset) => {
            const img = new Image();
            img.src = asset;
            img.onload = () => {
                setLoadedAssets((prev) => prev + 1);
            };
        });
    }, [assets]);

    const progress = (loadedAssets / totalAssets) * 100;

    return (
        <div className="loading-screen">
            <div className="loading-message">
                <h2>Loading...</h2>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <p>{Math.floor(progress)}%</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
