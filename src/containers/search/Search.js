import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/SearchActions';
import styles from './Search.module.css';
import DateField from '../../components/DateField/DateField';
import SearchField from '../../components/SearchField/SearchField';

class Search extends Component {
  
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
            />
          </div>
        </div>
        <div className={styles['table']}>
      
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
  return state;
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