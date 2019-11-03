import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/SearchActions';
import styles from './Search.module.css';

class Search extends Component {
  render() {
    return (
      <div className={styles['app']}>
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