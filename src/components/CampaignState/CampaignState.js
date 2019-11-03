import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './CampaignState.module.css';
import moment from 'moment';

class CampaignState extends PureComponent {

  getMomentCompatibleFormat = d => {
    let tokens = d.split('/');
    return `${tokens[2]}-${tokens[1]}-${tokens[0]}`;
  };

  isActive = () => {
    const {startDate, endDate} = this.props;
    return moment().isBetween(this.getMomentCompatibleFormat(startDate), this.getMomentCompatibleFormat(endDate));
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
