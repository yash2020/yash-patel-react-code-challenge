
import * as React from 'react';
import { Card, CardContent, Backdrop, Typography, CardActions, Divider, Button, Modal, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../styles/themeDesign';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, updatePostById } from '../redux/action/homeAct';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { getPostById } from '../redux/action/homeAct';

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

export default function EachPost(props) {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    const classes = useStyles();
    //for Modal
    const [modal, setModal] = React.useState(false);
    const handleClose = () => setModal(false);
    const [formData, setFormData] = React.useState({
        id: props.id,
        title: '',
        body: '',
        userId: 0,
    });
    const {
        id,
        title,
        body,
        userId
    } = formData;

    const handleFormOpen = (postid) => {
        // calling Function.
        dispatch(getPostById(postid));
        var setData =  posts.dataID;
        console.log(setData);
        setFormData(
            setData
                );
        setModal(true);
    }

    const onInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onFormSubmit = e => {
        e.preventDefault();
        dispatch(updatePostById(id,formData));
        // console.log(formData)
        setModal(false);
    };

    return (
        <div>
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
                    <Button variant='contained' color="secondary" onClick={() => dispatch(deletePost(props.postId))}>Delete</Button>
                    <Button variant='outlined' color="primary" onClick={() => handleFormOpen(props.id)}>Edit</Button>
                </CardActions>
            </Card>
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
                            <Button variant="contained" type="submit" value="Submit"> Update </Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}