import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.css';

class SearchField extends PureComponent {

  onChange = e => {
    const {onChange} = this.props;
    onChange && onChange(e.target.value);
  };

  render() {
    const { placeholder, value } = this.props;
    return (
      <input
        className={styles['input']}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={this.onChange}
      />
    );
  }
}

SearchField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchField;
