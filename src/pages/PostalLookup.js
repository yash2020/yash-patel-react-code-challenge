import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from '../component/styles/themeDesign';
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import getPostalInfo from '../component/redux/action/postalLookAct';
import { Card, CardContent, Typography, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@material-ui/core";

const PostalLookupPage = () => {
    const dispatch = useDispatch();
    const postLook = useSelector(state => state.postLook);
    var classes = useStyles();
    var [searchString, setSearchString] = useState('');
    return (
        <>
            <h1> Postal Info: </h1>
            <div className={classes.postSearchDiv}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField fullWidth value={searchString} id="search-postal" label="Postal code" variant="outlined" onChange={(evt) => setSearchString(evt.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => dispatch(getPostalInfo(searchString))} className={classes.searchBtn} variant="contained"> Search </Button>
                    </Grid>
                </Grid>

            </div>
            
            {
                (postLook.data === undefined || postLook.data.length == 0) ? 'Enter code for More Information' :
                    <Card className={classes.postCard} variant="outlined" >
                        <CardContent>
                            <Typography noWrap className={classes.hoameCardTitle} color="textSecondary" gutterBottom>
                                <span>Postal Code : <b>{postLook.data['post code']}</b></span>
                                <span className={classes.postCardCntry}> country : <b>{postLook.data.country}</b></span>
                            </Typography>

                            <Divider />
                            <Typography className={classes.postCardBody} variant="h5" component="h2">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Place Name</TableCell>
                                                <TableCell align="right">State</TableCell>
                                                <TableCell align="right">state abbreviation</TableCell>
                                                <TableCell align="right">latitude</TableCell>
                                                <TableCell align="right">longitude</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                postLook.data.places.map(eachLoct => (
                                                    <TableRow
                                                        key={eachLoct.state + eachLoct.latitude}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">{eachLoct['place name']}</TableCell>
                                                        <TableCell align="right">{eachLoct.state}</TableCell>
                                                        <TableCell align="right">{eachLoct['state abbreviation']}</TableCell>
                                                        <TableCell align="right">{eachLoct.latitude}</TableCell>
                                                        <TableCell align="right">{eachLoct.longitude}</TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Typography>
                        </CardContent>

                    </Card>

            }

        </>
    )
}

export default PostalLookupPage;