import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material'


function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.4rem',
    },
  };


  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let value = {
        x: e.clientX,
        y: e.clientY
      }
      console.log(value);
      setMousePos(value);
    })
  }
    , []);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        sx={{
          // fontFamily: 'Raleway',
          fontSize: '3.4rem',
          // backgroundColor: `rgb(58, 214, ${mousePos.x})`,
        }
        }

      >
        {/* {mousePos.x} */}
        Hi there, I am Richard Okonicha
      </Box>
    </ThemeProvider >
  );
}

export default App;
