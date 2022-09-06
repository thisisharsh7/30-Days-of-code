import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

function Header(){
    return(
        <>
            <header>
                <Navbar />
                <Hero />
            </header>
        </>
    )
}


export default Header;