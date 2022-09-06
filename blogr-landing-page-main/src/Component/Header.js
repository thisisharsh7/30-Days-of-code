import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

function Header(){
    return(
        <>
            <header style={{backgroundColor:"blue"}}>
                <Navbar />
                <Hero />
            </header>
        </>
    )
}


export default Header;