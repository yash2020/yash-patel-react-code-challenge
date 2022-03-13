import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryNames, fetchUniversitiesData } from "../component/redux/action/univerAct";
import { Grid, Button } from "@material-ui/core";
import useStyles from "../component/styles/themeDesign";
import EachInstuted from "../component/resuable/universitiesCard";

const UniversitiesPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const universitiesList = useSelector(state => state.universities);

    useEffect(() => {
        dispatch(fetchUniversitiesData());


    }, [])

    return (<>
        <Button className={classes.homeAddPostBtn} variant="outlined"> <b>Add New Post</b> </Button>
        <br />
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {universitiesList?.data?.map((eachInst,key) => (
                <Grid item xs={2} sm={4} md={4} key={key}>
                    <EachInstuted
                        country={eachInst?.country}
                        instName = {eachInst?.name}
                        domain={eachInst?.domains}
                        webSite={eachInst?.web_pages}
                    />
                </Grid>
            ))}
        </Grid>
    </>
    )
}

export default UniversitiesPage;