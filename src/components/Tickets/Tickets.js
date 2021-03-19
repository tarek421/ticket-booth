import React from 'react';
import './Ticket.css'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


export const Tickets = ({ticket}) => {

    const history = useHistory()
      const handleBook = (name) => {
          history.push(`/ticket/${name}`);
      }
    const card = { 
        width: '15rem',
        border:'0',
        height:'18rem',
        backgroundImage: `url(${(ticket.image) || "../../images/Group-1.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    // console.log(props.ticket)
    return (
        <Card style={card} className='mx-4' border="info">
            <Card.Body>
                <Card.Title>{ticket.name}</Card.Title>
                <button onClick={() => handleBook(ticket.name)}>bye now</button>
            </Card.Body>
            <Card.Footer className='card-footer'>টা {ticket.price}</Card.Footer>
        </Card>
    );
};

export default Tickets;