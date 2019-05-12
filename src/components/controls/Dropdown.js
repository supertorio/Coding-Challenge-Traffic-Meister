import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {

    render() {
        return (
            <div className={this.props.className}>
                <label>{this.props.label}
                    <select>
                        <option>Value</option>
                    </select>
                </label>
            </div>
        );
    }
}

export default Dropdown;
