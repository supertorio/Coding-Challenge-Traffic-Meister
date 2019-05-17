import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
        textAlign: 'center'
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

const LoadingIndicator = (props) => {
    return (
        <div className={props.classes.root}>
            <CircularProgress className={props.classes.progress} />
        </div>
    );
};

LoadingIndicator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingIndicator)
