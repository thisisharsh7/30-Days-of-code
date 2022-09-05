import React from 'react';
import illustration2 from './illustration-stay-productive.png';
import arrow from './icon-arrow.svg';

const Productive = () => {
    return(
        <>
            <div id='productive'>
                <img src={illustration2} alt="productive-image" />
                <div>
                    <h1>Stay productive, wherever you are</h1>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
                    <p id="seefyloWorks"><span>See how Fylo works</span><img src={arrow} alt="arrow-icon" /></p>
                </div>
            </div>
        </>
    )
}


export default Productive;