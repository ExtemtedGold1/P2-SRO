import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#222',
        },
        secondary:{
            main: '#76ff03',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222',
                    color: '#fff',
                    margin: 10,
                    '& .Mui-focused': {
                        color:'#fff'
                    },
                    '& .MuiInput-underline:after':{
                      borderBottomColor:'#fff'
                    },
                    '& .MuiInput-underline:before ':{
                        borderBottomColor:'#fff',
                    },
                },

            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    '&.Mui-focused': {
                        color: '#fff',
                        backgroundColor:'#222'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222',
                    color: '#fff',
                }
            }
        }
    }
});

export default responsiveFontSizes(theme);