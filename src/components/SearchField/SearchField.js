import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.css';

class SearchField extends PureComponent {

  onChange = e => {
    const {onChange} = this.props;
    onChange && onChange(e.target.value);
  };

  render() {
    const { placeholder, value, minValue, maxValue, onSearch } = this.props;
    return (
      <div className={styles['ct']}>
        <input
          className={styles['input']}
          type="text" value={value}
          placeholder={placeholder}
          onChange={this.onChange}
          min={minValue}
          max={maxValue}
        />
        <button className={styles['button']} onClick={onSearch}>
          <span role="img" aria-label="Search">
            &#128269;
          </span>
        </button>
      </div>
      
    );
  }
}

SearchField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  minValue: PropTypes.string,
  maxValue: PropTypes.string
};

export default SearchField;
