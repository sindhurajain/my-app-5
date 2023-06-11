import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./dividertext.css"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Icon } from '@iconify/react';
import fclogo from './cadlogo.png';
import acclogo from './acc-logo.png';
import swiftui from './SwiftUI.png';


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


const xyz = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {

  return (
    <xyz>
      <List>
      <ListItem
      sx={{
        fontSize: "30px",
        fontWeight: '800',
        fontFamily: '"Poppins", sans-serif'
        }}>
        Languages, Frameworks & Tools
      </ListItem>
      <br></br>
      <Divider textAlign="left"   
      sx={{
        fontSize: "20px",
        fontWeight: '500',
        fontFamily: '"Poppins", sans-serif'
        }}>
      Languages</Divider>
      <div className='langs'>

      <BootstrapTooltip title="Python" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
      </BootstrapTooltip>
      <BootstrapTooltip title="Java" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
      </BootstrapTooltip>
      <BootstrapTooltip title="JavaScript" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      </BootstrapTooltip>
      <BootstrapTooltip title="TypeScript" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      </BootstrapTooltip>      
      <BootstrapTooltip title="Swift" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />
      </BootstrapTooltip>
      <BootstrapTooltip title="C" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
      </BootstrapTooltip>
      <BootstrapTooltip title="HTML5" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
      </BootstrapTooltip>
      <BootstrapTooltip title="CSS3" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
      </BootstrapTooltip>
      <BootstrapTooltip title="matlab" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" />
      </BootstrapTooltip>
      <BootstrapTooltip title="R" placement="top">
      <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" />
      </BootstrapTooltip>


      </div>
        <br></br>
      <Divider textAlign="left"   
      sx={{
      fontSize: "20px",
      fontWeight: '500',
      fontFamily: '"Poppins", sans-serif'
      }}>
      Frameworks</Divider>
      <div className='langs'>

<BootstrapTooltip title="ReactJS" placement="top">
<img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
</BootstrapTooltip>
<BootstrapTooltip title="GraphQL" placement="top">
<img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />         
</BootstrapTooltip>
<BootstrapTooltip title= "tailwindcss" placement="top">
<img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
</BootstrapTooltip>
<BootstrapTooltip title="SwiftUI" placement="top">
<img alt="img" src={swiftui} />
</BootstrapTooltip>
<BootstrapTooltip title="Numpy" placement="top">
<img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />          
</BootstrapTooltip>      
<BootstrapTooltip title="Pandas" placement="top">
<img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" />
</BootstrapTooltip>
<BootstrapTooltip title="TensorFlow" placement="top">
<img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
</BootstrapTooltip>
<BootstrapTooltip title="pytorch" placement="top">
<img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />     
</BootstrapTooltip>
<BootstrapTooltip title="Keras" placement="top">
<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="#d00000" d="M24 0H0v24h24V0zM8.45 5.16l.2.17v6.24l6.46-6.45h1.96l.2.4l-5.14 5.1l5.47 7.94l-.2.3h-1.94l-4.65-6.88l-2.16 2.08v4.6l-.19.2H7l-.2-.2V5.33l.17-.17h1.48z"/></svg>
</BootstrapTooltip>
<BootstrapTooltip title="matplotlib" placement="top">
<Icon height="50px" width="50px" icon="devicon:matplotlib" color="#d00000" />
</BootstrapTooltip>
<BootstrapTooltip title="MaterialUI" placement="top">
<img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
</BootstrapTooltip>
<BootstrapTooltip title="DaisyUI" placement="top">
<Icon height="50px" width="50px" icon="logos:daisyui" />
</BootstrapTooltip>
</div>

<Divider textAlign="left"   
      sx={{
      fontSize: "20px",
      fontWeight: '500',
      fontFamily: '"Poppins", sans-serif'
      }}>
      Tools</Divider>
      <div className='langs'>
        <BootstrapTooltip title="VSCode" placement="top">
        <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        </BootstrapTooltip>
        <BootstrapTooltip title="GitHub" placement="top">
        <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </BootstrapTooltip>        
        <BootstrapTooltip title="Vim" placement="top">
       <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" />
        </BootstrapTooltip>      
        <BootstrapTooltip title="XCode" placement="top">
        <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" />
        </BootstrapTooltip>      
        <BootstrapTooltip title="Unity" placement="top">
        <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
        </BootstrapTooltip>              
        <BootstrapTooltip title="PyCharm" placement="top">
        <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" />
        </BootstrapTooltip>                   
        <BootstrapTooltip title="Figma" placement="top">
        <img alt="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        </BootstrapTooltip>
        <BootstrapTooltip title="CAD" placement="top">
        <img height="50px" width="50px" alt="img" src={fclogo}/>
        </BootstrapTooltip>   
        <BootstrapTooltip title="Adobe Creative Cloud" placement="top">
        <img height="50px" alt="img" width="50px" src={acclogo}/>
        </BootstrapTooltip>   
        </div>
      </List>

    </xyz>
  );
}

