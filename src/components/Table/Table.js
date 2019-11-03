import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

class Table extends PureComponent {
  render() {
    const { Thead, Tbody } = this.props;
    return (
      <table className={styles['table']}>
        {Thead}
        {Tbody}
      </table>
    );
  }
}

Table.propTypes = {
  Thead: PropTypes.element,
  Tbody: PropTypes.element
};

export default Table;
