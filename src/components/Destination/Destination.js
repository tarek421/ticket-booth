import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Destination = () => {
    const {name} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {name} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Destination;