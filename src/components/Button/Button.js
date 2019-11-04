import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends PureComponent {
  render() {
    const { onClick, children, disabled, type } = this.props;
    return (
      <button
        disabled={disabled ? 'disabled' : undefined}
        className={styles['button'] + ' ' + styles[type]}
        onClick={!disabled ? onClick : undefined}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: 'primary',
  disabled: false
};

export default Button;
