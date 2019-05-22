import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import {loadTrafficMeisterData} from '../../actions/meister-form-actions';
import {getMeisterDataLoading, getMeisterDataReady} from "../../reducers/index-reducer";
import LoadingIndicator from '../LoadingIndicator';
import VehicleSelectorGroup from '../controls/VehicleSelectorGroup';
import ResultsDisplay from '../ResultsDisplay';

const styles = theme => ({
   container: {
       width: '100%',
       padding: 20,
   }
});

export class MeisterForm extends Component {

    componentDidMount() {
        this.props.loadTrafficMeisterData();
    }

    render() {
        return (
            <div className="MeisterForm">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Traffic Meister
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={this.props.classes.container}>
                    {this.props.loading && <LoadingIndicator/>}
                    {this.props.ready &&
                    <Fragment>
                        <VehicleSelectorGroup />
                        <ResultsDisplay />
                    </Fragment>
                    }
                </div>
            </div>
        );
    }
}

MeisterForm.propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    ready: PropTypes.bool,
    loadTrafficMeisterData: PropTypes.func.isRequired,
};

MeisterForm.defaultProps = {
    loading: false,
    ready: false,
};

const mapStateToProps = state => {
    return {
        loading: getMeisterDataLoading(state),
        ready: getMeisterDataReady(state),
    };
};

const mapDispatchToProps = {
    loadTrafficMeisterData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MeisterForm));
