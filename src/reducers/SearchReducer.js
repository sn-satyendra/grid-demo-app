import * as TYPES from '../actions/ActionTypes';
// import update from 'immutability-helper';
import {isCurrentDateBetween} from '../utils/DateUtils';

const INITIAL_STATE = {
  startDate: undefined,
  endDate: undefined,
  search: "",
  campaigns: [],
  isLoading: false
};

export default function SearchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.UPDATE_CAMPAIGNS:
      return {
        ...state,
        campaigns: state.campaigns.concat(action.data)
      };
    case TYPES.ON_START_DATE_CHANGE:
      return {
        ...state,
        startDate: action.data,
        campaigns: doFilter(state.campaigns, {search: state.search, startDate: state.startDate, endDate: state.endDate})
      };
    case TYPES.ON_END_DATE_CHANGE:
      return {
        ...state,
        endDate: action.data,
        campaigns: doFilter(state.campaigns, {search: state.search, startDate: state.startDate, endDate: state.endDate})
      };
    case TYPES.ON_NAME_CHANGE:
      return {
        ...state,
        search: action.data
      };
    case TYPES.ON_SEARCH:
      return {
        ...state,
        campaigns: doFilter(state.campaigns, {search: state.search, startDate: state.startDate, endDate: state.endDate})
      };
    default:
      return state;
  }
}

function doFilter(campaigns, filters) {
  let filtered = [];
  let {search, startDate, endDate} = filters;
  campaigns && campaigns.forEach(c => {
    if (c.name.includes(search) && isCurrentDateBetween(startDate, endDate)) {
      filtered.push(c);
    }
  });
  return filtered;
}
