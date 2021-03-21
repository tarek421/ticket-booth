import React, { useEffect, useState } from 'react';
import Background from '../../images/home-bg.png'
import FakeData from '../../FakeData/FakeData.json'
import Tickets from '../Tickets/Tickets';
import './Home.css'

const Home = () => {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        setTickets(FakeData)
    }, []);
    var sectionStyle = {
        width: "100%",
        height: "auto",
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
    };
    return (
        <div style={sectionStyle}>
            <div className="d-flex align-items-center home container">
                <div style={{marginTop:'100px', marginBottom:'150px'}} className="row">
                    {
                        tickets.map(ticket => <Tickets key={ticket.id} ticket={ticket}></Tickets>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;