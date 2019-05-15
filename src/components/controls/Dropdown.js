import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import {DEFAULT_SELECT_VALUE} from '../../constants/meister-consts';

import './Dropdown.css';

const Dropdown = (props) => {
    return (
        <div className={`Dropdown ${props.className}`}>
            <label className="Dropdown--Label">{props.label}
                <select className="Dropdown--Select"
                        onChange={(e) => props.onChange(e.target.value)} value={props.value}>
                    <option value={DEFAULT_SELECT_VALUE}>Any</option>
                    {props.options.map((opt, i) => {
                        return <option key={i} value={opt}>{opt}</option>;
                    })}
                </select>
            </label>
        </div>
    );
};

Dropdown.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.instanceOf(List),
    onChange: PropTypes.func,
};

Dropdown.defaultProps = {
    label: '',
    className: '',
    value: DEFAULT_SELECT_VALUE,
    options: new List(),
    onChange: () => true,
};

export default Dropdown;
