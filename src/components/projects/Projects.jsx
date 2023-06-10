import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./projects.css";
import SimpleSlider from './SimpleSlider'
import SimpleSlider2 from './SimpleSlider2'
import SimpleSlider3 from './SimpleSlider3'
import SimpleSlider4 from './SimpleSlider4'
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import LaunchIcon from '@mui/icons-material/Launch';
import onemapapi from './onemapAPIlogo.png'
import leafletlogo from './leafletlogo.jpeg'
import swiftui from './SwiftUI.png'
import { Icon } from '@iconify/react';
import {Link} from "react-router-dom";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
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

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <div className="card-container">

        <Card className="element" id="card1" sx={{}}>
        <CardHeader
            title="Train Station Speedrunner"
            titleTypographyProps={{
                fontFamily: 'var(--body-font)'
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
            <a target="_blank" href="https://youtu.be/MCP6h9s601k">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= 'var(--body-font)'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </a>

            <a href="https://github.com/sindhurajain/train-station-speedrunner" target="_blank">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= 'var(--body-font)'>GitHub</Typography>
            <LaunchIcon />
            </IconButton>
            </a>


        </CardActions>

            <CardContent>
            <Typography paragraph fontFamily= 'var(--body-font)'>
            ● Developed React web app to find shortest route between 2 train stations using OneMap API
            </Typography>
            <Typography fontFamily= 'var(--body-font)'>
            ● Developed feature of telling a user which train door is nearest to the escalator at the destination
station using GraphQL            </Typography>
            </CardContent>

        </Card>

        <Card className="element" sx={{}}>
        <CardHeader
            title="Personal Website"
            titleTypographyProps={{
                fontFamily: 'var(--body-font)'
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
            <Typography className="demolink" color="black" fontFamily= 'var(--body-font)'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </Link>
            <a href="https://github.com/sindhurajain/my-app" target="_blank">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= 'var(--body-font)'>GitHub</Typography>
            <LaunchIcon />
            </IconButton>
            </a>
            
        </CardActions>
        
            <CardContent>
            <Typography paragraph fontFamily= 'var(--body-font)'>
            ● Developed personal website to showcase skills and projects
            </Typography>
            </CardContent>

        </Card>

        <Card className="element" id="card3" sx={{}}>
        <CardHeader
            title="Task-Management iOS App"
            titleTypographyProps={{
                fontFamily: 'var(--body-font)'
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
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= 'var(--body-font)'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </a>


            <a href="https://github.com/sindhurajain/ProductivityiOSApp" target="_blank">
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= 'var(--body-font)'>GitHub</Typography>
            <LaunchIcon />
            </IconButton>
            </a>

        </CardActions>

            <CardContent>
            <Typography paragraph fontFamily= 'var(--body-font)'>
            ● Developed iOS productivity app using Swift and SwiftUI for creating checklists, notes and event countdown clocks
            </Typography>
            <Typography paragraph fontFamily= 'var(--body-font)'>
            ● Built functionalities such as sending reminders and adding, editing and deleting entries
            </Typography>
            <Typography paragraph fontFamily= 'var(--body-font)'>
            ● Deployed app on Apple App Store
            </Typography>
            </CardContent>

        </Card>

        <Card className="element" id="card3" sx={{}}>
        <CardHeader
            title="RollyAI"
            titleTypographyProps={{
                fontFamily: 'var(--body-font)'
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
            <IconButton disableRipple="true">
            <Typography className="demolink" color="black" fontFamily= 'var(--body-font)'>Demo</Typography>
            <LaunchIcon />
            </IconButton>
            </a>

        </CardActions>

            <CardContent>
            <Typography paragraph fontFamily= 'var(--body-font)'>
            ● Used TypeScript, React, TailwindCSS and DaisyUI to build the frontend of website that
synchronously displays Telegram messages as widgets on the website for hackathon project
            </Typography>

            </CardContent>

        </Card>
    </div>
    
  );
};
  
export default Projects;