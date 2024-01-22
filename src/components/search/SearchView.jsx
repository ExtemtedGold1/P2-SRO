import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Grid,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';

const SearchView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [sport, setSport] = useState('');
    const [type, setType] = useState('');

    const handleSearch = () => {
        // handle search logic here
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Grid container spacing={2} alignItems="center"sx={{width: '50vh', height: '40vh'}}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Search for
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Wyszukaj"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel>Miasto</InputLabel>
                    <Select value={city} onChange={(e) => setCity(e.target.value)}>
                        <MenuItem value="">Wybierz miasto</MenuItem>
                        <MenuItem value="Warszawa">Warszawa</MenuItem>
                        <MenuItem value="Kraków">Kraków</MenuItem>
                        {/* add more city options here */}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel>Dzielnica</InputLabel>
                    <Select value={district} onChange={(e) => setDistrict(e.target.value)}>
                        <MenuItem value="">Wybierz dzielnicę</MenuItem>
                        <MenuItem value="Śródmieście">Śródmieście</MenuItem>
                        <MenuItem value="Praga">Praga</MenuItem>
                        {/* add more district options here */}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel>Sport</InputLabel>
                    <Select value={sport} onChange={(e) => setSport(e.target.value)}>
                        <MenuItem value="">Wybierz sport</MenuItem>
                        <MenuItem value="Piłka nożna">Piłka nożna</MenuItem>
                        <MenuItem value="Koszykówka">Koszykówka</MenuItem>
                        {/* add more sport options here */}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel>Rodzaj</InputLabel>
                    <Select value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="">Wybierz rodzaj</MenuItem>
                        <MenuItem value="Zamknięte">Zamknięte</MenuItem>
                        <MenuItem value="Otwarte">Otwarte</MenuItem>
                        {/* add more type options here */}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                >
                    Szukaj!
                </Button>
            </Grid>
        </Grid>
        </div>
    );
};

export default SearchView;