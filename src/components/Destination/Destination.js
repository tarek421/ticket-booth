import React, { useEffect } from 'react';
import map from '../../images/map.png'
import { useParams } from 'react-router-dom';
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
    const classes = useStyles();
    const { price } = useParams();
    useEffect(() => {

    }, [])
    console.log(price)
    return (
        <div className='container'>
            <div style={{ marginTop: '50px' }} className={classes.container}>
                <div style={{ gridColumnEnd: 'span 3' }}>
                    <Card>
                        <p>price:{price}</p>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Picked form
                    </Typography>
                            <Typography>
                                <input type="text" name="search" id="" />
                            </Typography>
                            <Typography className={classes.title} color="textSecondary">
                                Picked to
                    </Typography>
                            <Typography>
                                <input type="text" name="search" id="" />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">search</Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ gridColumnEnd: 'span 9' }}>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;