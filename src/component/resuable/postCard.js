
import * as React from 'react';
import { Card, CardContent, Typography, CardActions, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../styles/themeDesign';

export default function EachPost(props) {
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
                {/* Add ----> edit Card and delete card */}
            </CardActions>
        </Card>
    );
}