import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeData, addPost } from '../component/redux/action/homeAct'
import { Button, Grid, Backdrop, Modal } from "@material-ui/core";
import EachPost from "../component/resuable/postCard";
import useStyles from "../component/styles/themeDesign";
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        }
    });
    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});
Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const HomePage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const classes = useStyles();

    const [modal, setModal] = React.useState(false);
    const handleClose = () => setModal(false);

    const [formData, setFormData] = React.useState({
        title: '',
        body: '',
        userId: 0,
    });
    const {
        title,
        body,
        userId
    } = formData;
    const onInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onFormSubmit = e => {
        e.preventDefault();
        dispatch(addPost(formData));
        // console.log(formData)
        setModal(false);
    };

    useEffect(() => {
        //call the List of Home page.
        dispatch(fetchHomeData());
    }, [dispatch])
    return (
        <>
            <Button className={classes.homeAddPostBtn} onClick={() => setModal(true)} variant="outlined"> <b>Add New Post</b> </Button>
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

            <Modal
                open={modal}
                className={classes.modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal}>
                    <div className={classes.paper}>
                        <form className={classes.formRoot} onSubmit={onFormSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={1}>
                                    <p>Title : </p>
                                </Grid>
                                <Grid item xs={11}>
                                    <p><input
                                        type="text"
                                        name="title"
                                        value={title}
                                        onChange={onInputChange}
                                        required
                                        placeholder="Title"
                                    /></p>
                                </Grid>
                                <Grid item xs={1}>
                                    <p>Body : </p>
                                </Grid>
                                <Grid item xs={11}>
                                    <p> <input
                                        type="text"
                                        name="body"
                                        value={body}
                                        onChange={onInputChange}
                                        required
                                        placeholder="Body"
                                    /></p>
                                </Grid>
                                <Grid item xs={1}>
                                    <p>User:</p>
                                </Grid>
                                <Grid item xs={11}>
                                    <p> <input
                                        type="number"
                                        name="userId"
                                        value={userId}
                                        onChange={onInputChange}
                                        required
                                    /></p>
                                </Grid>
                            </Grid>



                            <br />
                            <Button variant="contained" type="submit" value="Submit"> Add </Button>
                        </form>
                    </div>
                </Fade>
            </Modal>


        </>
    )
}

export default HomePage;