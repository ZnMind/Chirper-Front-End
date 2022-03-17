import React from 'react';

const Chirps = props => {
    return (
        <>
            <h2 className="col-12 mt-2">{props.name}</h2>
            <p className="col-12 border-bottom">{props.chirp}</p>
        </>
    )
}

export default Chirps;