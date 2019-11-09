import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './DateField.module.css';

class DateField extends PureComponent {

  onChange = e => {
    const {onChange} = this.props;
    onChange && onChange(e.target.value);
  };

  render() {
    // TODO: Evaluate if any external library like react-datepicker is needed.
    const { value, minValue, maxValue } = this.props;
    return (
      <input 
        className={styles['input']}
        type="date" value={value}
        // placeholder={placeholder}
        onChange={this.onChange}
        min={minValue}
        max={maxValue}
      />
    );
  }
}

DateField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  minValue: PropTypes.string,
  maxValue: PropTypes.string
};

export default DateField;
