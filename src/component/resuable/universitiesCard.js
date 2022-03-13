
import * as React from 'react';
import { Card, CardContent, Typography, CardActions, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../styles/themeDesign';

export default function EachInstuted(props) {
    const classes = useStyles();
    return (
        <Card className={classes.univerCardRoot} variant="outlined" >
            <CardContent>
                <Typography noWrap className={classes.hoameCardTitle} color="textSecondary" gutterBottom>
                    {props.instName}
                </Typography>
                <Divider />
                <Typography noWrap className={classes.univerCardLocation} color="textSecondary" gutterBottom>
                    {props.country}
                </Typography>
                <Typography className={classes.univerCardBody} variant="h5" component="h2">
                    List of Domain.
                        <ul>
                            {props.domain.map((eachDomain,key)=>{
                                return <li className={classes.univerDomainli}><a href={props.webSite[key]}> {eachDomain}</a></li>;
                            })}
                            
                        </ul>
                </Typography>
            </CardContent>
            <CardActions>
                {/* Add ----> edit Card and delete card */}
            </CardActions>
        </Card>
    );
}