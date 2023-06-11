import React from 'react'
import Card from '@mui/material/Card';
import "./home.css"
import Social from './Social';
import Data from './Data'
import DividerText from './DividerText';


const Home = () => {
    return (
        <section className="home section" id="home">    
    
            <div className="home__container grid container ">
                <div className="home__content grid">
                    <div className="img__socials grid">
                        <div className="home__img"></div>
                        <Social/>              
                    </div>
                    <Data/>  
                </div> 
                <Card variant="outlined" className='toolcard'><DividerText/></Card>                  
                </div>  
        </section>
    );
}

export default Home;

