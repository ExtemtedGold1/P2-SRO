import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import Skeleton from '@mui/material/Skeleton'
import {useJsApiLoader, GoogleMap, Marker, InfoWindow} from '@react-google-maps/api';
import { styled } from "@mui/material";
import MyLocation from "../../config/getLocalization";
import Link from "@mui/material/Link";

const libraries = ['places'];

const MapGen = () =>{
    const { isLoaded } = useJsApiLoader({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: libraries,
    })
    const [centerMap, setCenterMap] = useState({lat: 0,lng: 0});
    const [map, setMap] = useState(null);
    const [searchResults, setSearchResults ] = useState([]);
    const [selectedPlace, setSelectedPlace ] = useState(null)
    const position = MyLocation();
    const radius = 3000;

    useEffect(() => {
        if(position.coord.latitude && position.coord.longitude && isLoaded){
            setCenterMap({lat: position.coord.latitude, lng: position.coord.longitude});
            const types = ['stadium'];
            const service = new window.google.maps.places.PlacesService(map);
            service.nearbySearch(
                {
                    location: {lat: position.coord.latitude, lng: position.coord.longitude},
                    radius: radius,
                    type: types,
                },
                (results, status)=> {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK){
                        console.log(results.entries())
                        setSearchResults(results);
                    } else {
                        console.error(status);
                    }
                }
            )
        }
    }, [map, position]);

    if (!isLoaded){
        return (<Skeleton/>);
    }
    return (
        <Box>
                {/* Google Map Box */}
            <GoogleMap center={centerMap} zoom={15} mapContainerStyle={mapStyle} onLoad={setMap}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
            }}>
                <StyledButton><Link href='/search'>Search</Link></StyledButton>
                { searchResults.map((place, index) => {
                    if (place.geometry && place.geometry.location) {
                        return (<Marker
                            key={index}
                            position={{
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng()
                        }}
                        onClick={() => {
                            setSelectedPlace(place);
                        }}
                        />
                        )
                    }
                })}
                { selectedPlace && (
                    <InfoWindow position={{
                        lat: selectedPlace.geometry.location.lat(),
                        lng: selectedPlace.geometry.location.lng()
                    }} onCloseClick={() => {
                        setSelectedPlace(null);
                    }}
                    >
                        <div>
                            <h2>{selectedPlace.name}</h2>
                            <p>{selectedPlace.vicinity}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </Box>
    )
}

export default MapGen;

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

const mapStyle = {
    //width: '100%',
    height: '500px'
}