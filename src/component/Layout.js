import { Fragment } from 'react';
import MiniDrawer from './Drawer';
import useStyles from './styles/themeDesign';

const Layout = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.root}>
                <MiniDrawer />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {props.children}
                </main>
            </div>
        </Fragment>
    );
};

export default Layout;