import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import {List as ImmutableList} from 'immutable';

import {DEFAULT_SELECT_VALUE} from '../../constants/meister-consts';

const styles = theme => ({
    root: {
        width: '100%',
        position: 'relative',
    },
    listWrapper: {
        height: 200,
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    optionText: {
        textTransform: 'capitalize'
    }
});

export const BaseListSelector = (props) => {
    return (
        <div className={props.classes.root}>
            <Typography component="h2" variant="h5" gutterBottom>{props.label}</Typography>
            <div className={props.classes.listWrapper}>
                <List>
                    <ListItem
                        button
                        key={`item-${DEFAULT_SELECT_VALUE}`}
                        onClick={() => props.onChange(DEFAULT_SELECT_VALUE)}
                        selected={props.value === DEFAULT_SELECT_VALUE}>
                        <ListItemText primary={`Any`} />
                    </ListItem>
                    {props.options.map((option) => (
                        <ListItem
                            button
                            key={`item-${option}`}
                            onClick={() => props.onChange(option)}
                            selected={props.value === option}>
                            <ListItemText className={props.classes.optionText} primary={option}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

BaseListSelector.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    value: PropTypes.string,
    options: PropTypes.instanceOf(ImmutableList),
    onChange: PropTypes.func,
};

BaseListSelector.defaultProps = {
    label: '',
    value: DEFAULT_SELECT_VALUE,
    options: new ImmutableList(),
    onChange: () => true,
};

export default withStyles(styles)(BaseListSelector);
