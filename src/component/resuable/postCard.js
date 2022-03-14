
import * as React from 'react';
import { Card, CardContent, Typography, CardActions, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../styles/themeDesign';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/action/homeAct';

export default function EachPost(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.homeCardRoot} variant="outlined" >
            <CardContent>
                <Link to={`/${props.postId}`}>
                    <Typography noWrap className={classes.hoameCardTitle} color="textSecondary" gutterBottom>
                        {props.id}. {props.title}
                    </Typography>
                </Link>
                <Divider />
                <Typography className={classes.homeCardBody} variant="h5" component="h2">
                    {props.body}
                </Typography>
                <Typography className={classes.homeCardPos} color="textSecondary">
                    User:{props.userId}
                </Typography>
            </CardContent>
            <CardActions>
            <Button variant='contained' color="secondary" onClick={()=>dispatch(deletePost(props.postId))}>Delete</Button>

            </CardActions>
        </Card>
    );
}