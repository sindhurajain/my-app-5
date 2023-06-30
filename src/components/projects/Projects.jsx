import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import "./projects.css";
import SimpleSlider from './SimpleSlider'
import SimpleSlider2 from './SimpleSlider2'
import SimpleSlider3 from './SimpleSlider3'
import SimpleSlider4 from './SimpleSlider4'
import SimpleSlider5 from './SimpleSlider5'
import SimpleSlider6 from './SimpleSlider6'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import LaunchIcon from '@mui/icons-material/Launch';
import onemapapi from './onemapAPIlogo.png'
import leafletlogo from './leafletlogo.jpeg'
import swiftui from './SwiftUI.png'
import { Icon } from '@iconify/react';
import {Link} from "react-router-dom";


const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));


const Projects = () => {
 
  return (
    <div className="card-container">

            <Card className="element" id="card1" sx={{}}>
        <CardHeader
            title="Full-Stack Blog Website"
            titleTypographyProps={{
                fontFamily: '"Poppins", sans-serif'
            }}
        />
        <SimpleSlider5/> 
        <CardContent>
            <BootstrapTooltip title="MongoDB" placement="top">          
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="ExpressJS" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="ReactJS" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="NodeJS" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            </BootstrapTooltip>

        </CardContent>
        <CardActions disableSpacing>
            <a target="_blank" href="https://youtu.be/Q3dXykGbBGk">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </a>

            <a href="https://github.com/sindhurajain/MERN-stack-blog" target="_blank">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>GitHub</Typography>
            <LaunchIcon />
            </IconButton>
            </a>


        </CardActions>

            <CardContent>
            <Typography paragraph fontFamily= '"Poppins", sans-serif'>
            ● Developed full-stack blog website using MongoDB, ExpressJS, ReactJS, and NodeJS (MERN stack)
            </Typography>
            <Typography fontFamily= '"Poppins", sans-serif'>
            ● Developed features of registering, logging in, logging out, creating a post, displaying posts from all users, automatically seeing the data & time the blog was posted and last updated and editing posts made by only your account    
</Typography>
           
    </CardContent>

        </Card>









<Card className="element" id="card1" sx={{}}>
        <CardHeader
            title="Password Generator Chrome Extension (With Authentication)"
            titleTypographyProps={{
                fontFamily: '"Poppins", sans-serif'
            }}
        />
        <SimpleSlider6/>
        <CardContent>
            <BootstrapTooltip title="Firebase" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="JavaScript" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="HTML5" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="CSS3" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            </BootstrapTooltip>

        </CardContent>
        <CardActions disableSpacing>
            <a target="_blank" href="https://youtu.be/W2IMV4X0dMc">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </a>

            <a href="https://github.com/sindhurajain/password-generator-chrome-extension" target="_blank">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>GitHub</Typography>
            <LaunchIcon />
            </IconButton>
            </a>


        </CardActions>

            <CardContent>
            <Typography paragraph fontFamily= '"Poppins", sans-serif'>
            ● Developed random password generator using Firebase, JavaScript, HTML and CSS
            </Typography>
            <Typography fontFamily= '"Poppins", sans-serif'>
            ● Features include gmail account authentication for security & logging in and out,  automatically generating random passwords, 
            using a slider to adjust the length of the generated password and displaying the length, 
            using buttons to chose whether or not to include digits, special characters or uppercase letters 
            and copying the generated password to the clipboard           
</Typography>
           
    </CardContent>

        </Card>


        <Card className="element" id="card1" sx={{}}>
        <CardHeader
            title="Train Station Speedrunner"
            titleTypographyProps={{
                fontFamily: '"Poppins", sans-serif'
            }}
        />
        <SimpleSlider/>
        <CardContent>
            <BootstrapTooltip title="ReactJS" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="GraphQL" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="MaterialUI" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="Leaflet" placement="top">
            <img width="40px" className="stackele" src={leafletlogo} />
            </BootstrapTooltip>
            <BootstrapTooltip title="OneMap API" placement="top">
            <img width="40px" className="stackele" src={onemapapi} />
            </BootstrapTooltip>
        </CardContent>
        <CardActions disableSpacing>
            <a target="_blank" href=https://youtu.be/igApp_N-zOk">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </a>

            <a href="https://github.com/sindhurajain/train-station-speedrunner" target="_blank">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>GitHub</Typography>
            <LaunchIcon />
            </IconButton>
            </a>


        </CardActions>

            <CardContent>
            <Typography paragraph fontFamily= '"Poppins", sans-serif'>
            ● Developed React web app to find shortest route between 2 train stations using OneMap API
            </Typography>
            <Typography fontFamily= '"Poppins", sans-serif'>
            ● Developed feature of telling a user which train door is nearest to the escalator at the destination
station using GraphQL            </Typography>
            </CardContent>

        </Card>

        <Card className="element" sx={{}}>
        <CardHeader
            title="Personal Website"
            titleTypographyProps={{
                fontFamily: '"Poppins", sans-serif'
            }}
        />
        <SimpleSlider2/>
        <CardContent>
            <BootstrapTooltip title="ReactJS" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="HTML5" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="CSS3" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="MaterialUI" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            </BootstrapTooltip>
        </CardContent>
        <CardActions disableSpacing>
            <Link to="/">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </Link>
            <a href="https://github.com/sindhurajain/portfolio" target="_blank">
            <IconButton  disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>GitHub</Typography>
            <LaunchIcon />
            </IconButton>
            </a>
            
        </CardActions>
        
            <CardContent>
            <Typography paragraph fontFamily= '"Poppins", sans-serif'>
            ● Developed personal website to showcase skills and projects
            </Typography>
            </CardContent>

        </Card>

        <Card className="element" id="card3" sx={{}}>
        <CardHeader
            title="Task-Management iOS App"
            titleTypographyProps={{
                fontFamily: '"Poppins", sans-serif'
            }}
        />
        <SimpleSlider3/>
        <CardContent>
            <BootstrapTooltip title="Swift" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="SwiftUI" placement="top">
            <img width="40px" className="stackele" src={swiftui} />
            </BootstrapTooltip>
        </CardContent>
        <CardActions disableSpacing>
            
            <a href="https://youtu.be/gj9h6YfRJHw" target="_blank">
            <IconButton  disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </a>


            <a href="https://github.com/sindhurajain/ProductivityiOSApp" target="_blank">
            <IconButton  disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>GitHub</Typography>
            <LaunchIcon />
            </IconButton>
            </a>

        </CardActions>

            <CardContent>
            <Typography paragraph fontFamily= '"Poppins", sans-serif'>
            ● Developed iOS productivity app using Swift and SwiftUI for creating checklists, notes and event countdown clocks
            </Typography>
            <Typography paragraph fontFamily= '"Poppins", sans-serif'>
            ● Built functionalities such as sending reminders and adding, editing and deleting entries
            </Typography>
            <Typography paragraph fontFamily= '"Poppins", sans-serif'>
            ● Deployed app on Apple App Store
            </Typography>
            </CardContent>

        </Card>

        <Card className="element" id="card3" sx={{}}>
        <CardHeader
            title="RollyAI"
            titleTypographyProps={{
                fontFamily: '"Poppins", sans-serif'
            }}
        />
        <SimpleSlider4/>
        <CardContent>
        <BootstrapTooltip title="TypeScript" placement="top">
        <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        </BootstrapTooltip>   
        <BootstrapTooltip title="ReactJS" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title= "tailwindcss" placement="top">
            <img width="40px" className="stackele" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            </BootstrapTooltip>
            <BootstrapTooltip title="DaisyUI" placement="top">
            <Icon width="40px" height="40px" className="stackele" icon="logos:daisyui" />
            </BootstrapTooltip>
        </CardContent>
        <CardActions disableSpacing>
            <a href="https://www.youtube.com/watch?v=sh5IFCQ7Qi8" target="_blank">
            <IconButton  disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= '"Poppins", sans-serif'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </a>

        </CardActions>

            <CardContent>
            <Typography paragraph fontFamily= '"Poppins", sans-serif'>
            ● Used TypeScript, React, TailwindCSS and DaisyUI to build the frontend of website that
synchronously displays Telegram messages as widgets on the website for hackathon project
            </Typography>

            </CardContent>

        </Card>
    </div>
    
  );
};
  
export default Projects;
