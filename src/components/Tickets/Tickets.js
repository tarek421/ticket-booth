import React from 'react';
import './Ticket.css'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


export const Tickets = ({ ticket }) => {

    const history = useHistory()
    const handleBook = (price) => {
        history.push(`/destination/${price}`);
    }
    const card = {
        width: '15rem',
        border: '0',
        height: '18rem',
        backgroundImage: `url(${(ticket.image) || "../../images/Group-1.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    // console.log(props.ticket)
    return (
        <div className="col-md-3 col-sm-12">
            <Card style={card} className='mx-4' border="info">
                <Card.Body>
                    <Card.Title classdName="card-title">{ticket.name}</Card.Title>
                    <button className="card-btn" onClick={() => handleBook(ticket.price)}>bye now</button>
                </Card.Body>
                <Card.Footer className='card-footer'>টা {ticket.price}</Card.Footer>
            </Card>
        </div>
    );
};

export default Tickets;