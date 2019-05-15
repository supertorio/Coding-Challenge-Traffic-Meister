import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';

import {DEFAULT_SELECT_VALUE} from "../constants/meister-consts";
import {
    getCurrentVehicleBrand,
    getCurrentVehicleColor,
    getCurrentVehicleType,
    getMeisterFormHasSelections
} from "../reducers/index-reducer";
import {resetVehicleForm} from '../actions/meister-form-actions';

class ResultsDisplay extends PureComponent {
    render() {
        const {formHasSelections, selectedType, selectedBrand, selectedColor, resetVehicleForm} = this.props;
        return (
            <Fragment>
                {formHasSelections &&
                <div className="Results Display">
                    <h2>Your Selection</h2>
                    <ul>
                        {selectedType !== DEFAULT_SELECT_VALUE && <li>Type: {selectedType}</li>}
                        {selectedBrand !== DEFAULT_SELECT_VALUE && <li>Brand: {selectedBrand}</li>}
                        {selectedColor !== DEFAULT_SELECT_VALUE && <li>Color: {selectedColor}</li>}
                    </ul>
                    <button onClick={resetVehicleForm}>Reset Form</button>
                </div>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        formHasSelections: getMeisterFormHasSelections(state),
        selectedType: getCurrentVehicleType(state),
        selectedBrand: getCurrentVehicleBrand(state),
        selectedColor: getCurrentVehicleColor(state),
    };
};

const mapDispatchToProps = {
    resetVehicleForm
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsDisplay);
