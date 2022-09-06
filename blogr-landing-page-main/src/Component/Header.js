import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

function Header(){
    return(
        <>
            <header>
                <div id="bg-shape">
                <Navbar />
                <Hero />
                </div>
            </header>
        </>
    )
}


export default Header;