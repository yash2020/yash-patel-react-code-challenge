import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeData } from '../component/redux/action/homeAct'
import { Button, Grid } from "@material-ui/core";
import EachPost from "../component/resuable/postCard";
import useStyles from "../component/styles/themeDesign";

const HomePage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const classes = useStyles();

    useEffect(() => {
        //call the List of Home page.
        dispatch(fetchHomeData());
    }, [dispatch])
    return (
        <>
            <Button className={classes.homeAddPostBtn} variant="outlined"> <b>Add New Post</b> </Button>
            <br />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {posts?.data?.map((post) => (
                    <Grid item xs={2} sm={4} md={4} key={post.id}>
                        <EachPost
                            title={post?.title}
                            body={post?.body}
                            id={post?.id}
                            userId={post?.userId}
                            postId={post?.id}
                        />
                    </Grid>
                ))}
            </Grid>

        </>
    )
}

export default HomePage;