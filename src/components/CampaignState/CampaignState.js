import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './CampaignState.module.css';

class CampaignState extends PureComponent {

  isActive = () => {
    const {startDate, endDate} = this.props;
    const currDate = new Date();
    const objStartDate = new Date(startDate);
    const objEndDate = new Date(endDate);
    return currDate >= objStartDate && currDate < objEndDate;
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
