import React, { useState, useEffect } from 'react';

function MyLocation() {
    const [position, setPosition] = useState({ coord: { latitude: null, longitude: null } });

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    coord: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }
                });
            }, function(error) {
                console.log("Error occurred. Error code: " + error.code);
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    return (position);
}

export default MyLocation;
