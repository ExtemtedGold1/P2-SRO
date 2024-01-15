import React from 'react';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
        <Box>
            <Stack>
                <Typography>Projekt EagleBooks</Typography>
            </Stack>
            <Stack>
                <Typography>
                    Masz pytania?
                    Potrzebujesz więcej informacji?
                </Typography>
                <Typography>
                    Bądź na bieżąco z nowoścami i wydarzeniami EagleBooks
                </Typography>
            </Stack>
            <Stack>
                <Typography>
                    Konakt:
                    EagleBooksContact@gmail.com
                    +48 666 696 666
                </Typography>
                <Typography>
                    Zapisz się na newsletter
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer;