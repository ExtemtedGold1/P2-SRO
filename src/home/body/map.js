import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import Skeleton from '@mui/material/Skeleton'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { styled } from "@mui/material";
import MyLocation from "../../config/getLocalization";

const mapStyle = {
    width: '100%',
    height: '500px'
}

const StyledButton = styled(Button)({
    position: 'absolute',
    top: '6%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50', // Kolor tła
    color: '#fff', // Kolor tekstu
    border: '2px solid #4CAF50', // Kolor obramowania
    borderRadius: '5px', // Zaokrąglenie rogów
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s, border-color 0.3s', // Efekt przejścia
    '&:hover': {
        backgroundColor: '#45a049', // Kolor tła po najechaniu
        border: '2px solid #45a049', // Kolor obramowania po najechaniu
    },
    '&:focus': {
        outline: 'none', // Usunięcie domyślnego obramowania na fokusie
    },
});

const MapGen = () =>{
    const { isLoaded } = useJsApiLoader({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })
    const [center, setCenter] = useState({lat: 0,lng: 0});
    const position = MyLocation();

    useEffect(() => {
        if(position.coord.latitude && position.coord.longitude){
            setCenter({lat: position.coord.latitude, lng: position.coord.longitude});
        }
    }, [position]);

    if (!isLoaded){
        return <Skeleton/>
    }
    return (
        <Box>
            {/* Google Map Box */}
            <GoogleMap center={center} zoom={15} mapContainerStyle={mapStyle}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
            }}>
                <StyledButton>Search</StyledButton>
                {/* Displayin markers, or directions */}
                <Marker position={{lat: -25.363882, lng: 131.044922}}/>
            </GoogleMap>
        </Box>
    )
}

export default MapGen;