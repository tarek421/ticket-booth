import React, { useState } from 'react';
import map from '../../images/map.png'
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(10, 0),
    },
}));

const Destination = () => {
    const [ticketInfo, setTicketInfo] = useState({});
    const classes = useStyles();
    const { price } = useParams();
    console.log(ticketInfo)

    const handleChangeFrom = event => {
        const newUserInfo = { ...ticketInfo };
        newUserInfo[event.target.name] = event.target.value;
        setTicketInfo(newUserInfo);
    }

    const history = useHistory()
    const handleDestination = (ticketInfo) => {
        history.push(`/destinationDetail/${ticketInfo}`);
    }

    return (
        <div className='container'>
            <div style={{ marginTop: '50px' }} className='row'>
                <div className='col-md-3 col-sm-12'>
                    <Card>
                        <p>price:{price}</p>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Picked form
                        </Typography>
                            <Typography>
                                <input style={{width:'100%'}} onBlur={handleChangeFrom} type="text" name="from" id="1" />
                            </Typography>
                            <Typography className={classes.title} color="textSecondary">
                                Picked to
                        </Typography>
                            <Typography>
                                <input style={{width:'100%'}} onBlur={handleChangeFrom} type="text" name="to" id="2" />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{background:'cyan'}} onClick={() => handleDestination(ticketInfo)} size="small">search</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='col-md-9 col-sm-12' style={{ gridColumnEnd: 'span 9', height: '480px' }}>
                    <img style={{ height: '100%', width: '100%' }} src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;