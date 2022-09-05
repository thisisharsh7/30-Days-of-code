import React from 'react';

const Card = (props) => {
    return(
        <>
            <div className='card'>
                <p className='userDesc'>{props.desc}</p>
                <img src={props.userImg} alt="user-profile" />
                <p className='userName'>{props.name}</p>
                <p className='userWork'>{props.work}</p>
            </div>
        </>
    )
}

export default Card;