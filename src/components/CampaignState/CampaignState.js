import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './CampaignState.module.css';
import {isCurrentDateBetween} from '../../utils/DateUtils';

class CampaignState extends PureComponent {

  isActive = () => {
    const {startDate, endDate} = this.props;
    return isCurrentDateBetween(startDate, endDate);
  };

  render() {
    const active = this.isActive();
    return (
      <div className={styles['ct']}>
        <div className={active ? styles['ic-active'] : styles['ic-inactive']}>
        </div>
        <div>{active ? "Active": "Inactive"}</div>
      </div>
    );
  }
}

CampaignState.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default CampaignState;
