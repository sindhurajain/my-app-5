import React from 'react'
import Button from '@mui/material/Button';
import "./data.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cv from './CV_Website.pdf';

const theme = createTheme({
typography: {
    button: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: '1rem',
        fontWeight: 'normal',
        textTransform: 'none',
    }
},
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#000000',
      contrastText: '#000000',
    },
  },
});
const Data = () => {
    return (
        <div className='home__data'>
            <p className="home__title">Sindhura Jain
 
                </p>
                <p style={{fontSize: 23, fontWeight:"400"}} className="home__description">Computer Science Student</p>
                <br></br>
                <p>I'm a 2nd Year undergraduate student at the National University of Singapore (NUS).
                I'm currently enrolled in the Bachelor of Computing in Computer Science program. I'm also doing a double major in Mathematics and am
                part of NUS's honours college. I am a recipient of the NUS Merit Scholarship.     
                </p>
                <br></br>
                <p>I'm passionate about artificial intelligence & machine learning, algorithms & theory and software engineering. I love making ideas come to life. 
                </p>
                <br></br>
                <p>Feel free to reach out to me!</p>
                <br></br>
                <ThemeProvider theme={theme} >
                <Button className="button1" variant="outlined" color="neutral" disableRipple="true"
                    href="mailto:sindhura394@gmail.com" >
                    Contact Me           
                    <svg
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="black"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="black"
                  ></path>
                </svg>
                </Button>
                <br></br>
                <br></br>
                <a
                href={cv}
                download="Sindhura-Jain-CV"
                target="_blank"
                rel="noreferrer">

                <Button className="button1" variant="outlined" color="neutral" disableRipple="true"
                >
                  Download CV                
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="button__icon"><path fill="currentColor" d="M8.29 13.29a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0-1.42-1.42L13 14.59V3a1 1 0 0 0-2 0v11.59l-1.29-1.3a1 1 0 0 0-1.42 0ZM18 9h-2a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Z"/></svg>
                </Button>

                </a>
                </ThemeProvider>
        </div>

    );

};
export default Data;

