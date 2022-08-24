import React from 'react';
import Card from './Card';
import img1 from './images/screenshot1.jpg';
import img2 from './images/screenshot2.jpg';
import img3 from './images/screenshot3.jpg';
import img4 from './images/screenshot4.jpg';
import img5 from './images/screenshot5.jpg';
import img6 from './images/screenshot6.jpg';
import img7 from './images/screenshot7.jpg';
import img8 from './images/screenshot8.jpg';
import img9 from './images/screenshot9.jpg';
import img10 from './images/screenshot10.jpg';
import img11 from './images/screenshot11.jpg';
import img12 from './images/screenshot12.jpg';
import img13 from './images/screenshot13.jpg';
import img14 from './images/screenshot14.jpg';
import img15 from './images/screenshot15.jpg';
import img16 from './images/screenshot16.jpg';
import img17 from './images/screenshot17.jpg';


function Main(){
    return (
        <>
            <div className='card-body'>


                <Card display={img1} goto="https://elegant-babka-9c3709.netlify.app/" title="QR Code Card" cnt="project1"/>

                <Card display={img2} goto="https://sunny-crisp-7a9a2e.netlify.app/" title="Product Preview Card" cnt="project2"/>

                <Card display={img3} goto="https://stellular-jalebi-3b1ecc.netlify.app/" title="NFT Preview Card" cnt="project3"/>

                <Card display={img4} goto="https://chic-dieffenbachia-e4d655.netlify.app/" title="Order Summary Card" cnt="project4"/>

                <Card display={img5} goto="https://courageous-lollipop-03872f.netlify.app/" title="3 Column Preview Card" cnt="project5"/>

                <Card display={img6} goto="https://lucky-monstera-e9cc20.netlify.app/" title="Profile Card Preview" cnt="project6"/>

                <Card display={img7} goto="https://creative-puppy-d58dc9.netlify.app/" title="Huddle Landing Page" cnt="project7"/>

                <Card display={img8} goto="https://joyful-platypus-a2949d.netlify.app/" title="Four Card Feature Preview" cnt="project8"/>

                <Card display={img9} goto="https://frabjous-sprinkles-a723d0.netlify.app/" title="Single Price Grid Preview" cnt="project9"/>

                <Card display={img10} goto="https://musical-taffy-a1e27f.netlify.app/" title="Social Proof Section Preview" cnt="project10"/>

                <Card display={img11} goto="https://chipper-kelpie-ffd450.netlify.app/" title="Stats Preview Card" cnt="project11"/>

                <Card display={img12} goto="https://jolly-kitten-112311.netlify.app/" title="Testimonial Grid Preview" cnt="project12"/>

                <Card display={img13} goto="https://astonishing-capybara-4b9445.netlify.app/" title="Fylo Data Storage Preview" cnt="project13"/>

                <Card display={img14} goto="https://brilliant-platypus-ccc8fc.netlify.app/" title="Huddle Full Landing Page" cnt="project14"/>

                <Card display={img15} goto="https://nimble-panda-389dda.netlify.app/" title="Clipboard Landing Page" cnt="project15"/>

                <Card display={img16} goto="https://lucent-elf-3bf33f.netlify.app/" title="Landing page fylo" cnt="project16"/>

                <Card display={img17} goto="https://dazzling-meerkat-fb4cd8.netlify.app/" title="Huddle Landing page" cnt="project17"/>
            </div>
        </>
    );
};

export default Main;