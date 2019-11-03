import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

class Table extends PureComponent {
  getNoData = () => {
    return (
      <tbody>
        <tr>
          <td colSpan="5">
            No data available.
          </td>
        </tr>
      </tbody>
    );
  };
  render() {
    const { Thead, Tbody } = this.props;
    return (
      <table className={styles['table']}>
        {Thead}
        {!Tbody || Tbody.props.children.length > 0 ? Tbody : this.getNoData()}
      </table>
    );
  }
}

Table.propTypes = {
  Thead: PropTypes.element,
  Tbody: PropTypes.element
};

export default Table;
