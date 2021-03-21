import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router';
import map from '../../images/map.png'

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


const DestinationDetail = () => {
    const classes = useStyles();
    const { ticketInfo } = useParams();
    console.log(ticketInfo)
    return (
        <div className='container'>
            <div style={{ marginTop: '50px' }} className='row'>
                <div className='col-md-3 col-sm-12'>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Picked form
                        </Typography>
                            <Typography>
                                <h2>Dhaka</h2>
                                <h2>{ticketInfo.from}</h2>
                            </Typography>
                            <Typography className={classes.title} color="textSecondary">
                                Picked to
                        </Typography>
                            <Typography>
                                <h2>Shylhet</h2>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-9 col-sm-12' style={{height:'480px' }}>
                    <img style={{height:'100%',width:'100%'}} src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DestinationDetail;