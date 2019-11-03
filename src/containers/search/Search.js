import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/SearchActions';
import styles from './Search.module.css';
import DateField from '../../components/DateField/DateField';
import SearchField from '../../components/SearchField/SearchField';
import Table from '../../components/Table/Table';
import {friendlyNumber} from '../../utils/MathUtils';
import CampaignState from '../../components/CampaignState/CampaignState';

class Search extends Component {

  getTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Active</th>
          <th>Budget</th>
        </tr>
      </thead>
    );
  };

  getTableBody = () => {
    const {campaigns} = this.props;
    let cols = [];
    campaigns && campaigns.forEach(c => {
      cols.push(
        <tr key={c.id}>
          <td>{c.name}</td>
          <td>{c.startDate}</td>
          <td>{c.endDate}</td>
          <td><CampaignState startDate={c.startDate} endDate={c.endDate} /></td>
          <td>{friendlyNumber(c.Budget)} USD</td>
        </tr>
      );
    });
    return (
      <tbody>
        {cols}
      </tbody>
    );
  };
  
  render() {
    const {actions} = this.props;
    return (
      <div className={styles['search-ct']}>
        <div className={styles['inputs']}>
          <div className={styles['dates']}>
            <DateField 
              placeholder="Start Date"
              onChange={actions.onStartDateChange}
              value={this.props.startDate}
            />
            <DateField
              placeholder="End Date"
              onChange={actions.onEndDateChange}
              value={this.props.endDate}
            />
          </div>
          <div className={styles['name']}>
            <SearchField 
              placeholder="Name"
              onChange={actions.onNameChange}
              value={this.props.search}
              onSearch={actions.onSearch}
            />
          </div>
        </div>
        <div className={styles['table']}>
          <Table
            Thead={this.getTableHeader()}
            Tbody={this.getTableBody()}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  search: PropTypes.string,
  campaigns: PropTypes.array,
  isLoading: PropTypes.bool,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return state.SearchReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);