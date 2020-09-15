import React from 'react';
import {db} from "../../firebase/firebaseConfig";
import {Card, CardActions, CardContent, Typography} from "@material-ui/core";
import {Button} from "react-bootstrap";
import {makeStyles} from '@material-ui/core/styles';

const useStyles =makeStyles(theme =>({
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
}))

const SimpleCard = () => {
    const classes = useStyles();

     db.collection('emails').get()
        .then(snapshot => {
            snapshot.map((item) => {
                return (
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Database card information
                            </Typography>
                            <Typography variant="h5" component="h2">
                                `${item.name}: ${item.email}: ${item.message}`
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )
            })
        })
}

export default SimpleCard;