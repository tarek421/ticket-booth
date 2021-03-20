import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/FakeData.json'
import Tickets from '../Tickets/Tickets';
import './Home.css'

const Home = () => {
    const [tickets, setTickets] = useState([]);
    useEffect(() =>{
        setTickets(FakeData)
    },[])
    return (
        <div className="d-flex mt-5 pt-5 m-3 align-items-center container home">
            {
                tickets.map(ticket => <Tickets key={ticket.id} ticket={ticket}></Tickets>)
            }
        </div>
    );
};

export default Home;