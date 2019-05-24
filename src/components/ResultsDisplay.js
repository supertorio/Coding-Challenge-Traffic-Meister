import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import {DEFAULT_SELECT_VALUE, SELECTION_CATEGORIES} from "../constants/meister-consts";
import {
    getCurrentVehicleBrand,
    getCurrentVehicleColor,
    getCurrentVehicleType,
    getMeisterFormHasSelections,
    getCurrentVehicleImage
} from "../reducers/index-reducer";
import {clearSelection, resetVehicleForm} from '../actions/meister-form-actions';

const styles = theme => ({
    selections: {
        marginTop: 20
    },
    divider: {
        marginBottom: 20
    },
    chip: {
        textTransform: 'Capitalize',
        margin: theme.spacing.unit,
    },
    chipGroup: {
        paddingBottom: 10,
    },
    button: {
        margin: theme.spacing.unit,
    },
    vehicleImage: {
        maxWidth: 300,
        maxHeight: 200
    }
});

export class ResultsDisplay extends PureComponent {
    render() {
        const {classes, selectedType, selectedBrand, selectedColor, vehicleImage} = this.props;
        return (
            <div className={classes.selections}>
                {this.props.formHasSelections &&
                <Fragment>
                    <Divider className={classes.divider} />
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={6}>
                            <Typography component="h2" variant="h5" gutterBottom>Your Selections</Typography>
                            <div className={classes.chipGroup}>
                                {selectedType !== DEFAULT_SELECT_VALUE &&
                                <Chip label={selectedType} className={classes.chip}
                                      onDelete={() => this.props.clearSelection(SELECTION_CATEGORIES.TYPE)}/>}
                                {selectedBrand !== DEFAULT_SELECT_VALUE &&
                                <Chip label={selectedBrand} className={classes.chip}
                                      onDelete={() => this.props.clearSelection(SELECTION_CATEGORIES.BRAND)}/>}
                                {selectedColor !== DEFAULT_SELECT_VALUE &&
                                <Chip label={selectedColor} className={classes.chip}
                                      onDelete={() => this.props.clearSelection(SELECTION_CATEGORIES.COLOR)}/>}
                            </div>
                            <Button variant="contained" color="primary" className={classes.button}
                                    onClick={this.props.resetVehicleForm}>
                                Reset Form
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {vehicleImage !== null &&
                                <img className={classes.vehicleImage} src={vehicleImage} alt={selectedBrand} />
                            }
                        </Grid>
                    </Grid>
                </Fragment>
                }
            </div>
        );
    }
}

ResultsDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
    selectedType: PropTypes.string,
    selectedBrand: PropTypes.string,
    selectedColor: PropTypes.string,
    vehicleImage: PropTypes.string,
    formHasSelections: PropTypes.bool,
    resetVehicleForm: PropTypes.func,
    clearSelection: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        formHasSelections: getMeisterFormHasSelections(state),
        selectedType: getCurrentVehicleType(state),
        selectedBrand: getCurrentVehicleBrand(state),
        selectedColor: getCurrentVehicleColor(state),
        vehicleImage: getCurrentVehicleImage(state)
    };
};

const mapDispatchToProps = {
    resetVehicleForm,
    clearSelection,
};

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsDisplay));
