import * as TYPES from '../actions/ActionTypes';
import {isSameOrAfter, isSameOrBefore, getMomentCompatibleFormat} from '../utils/DateUtils';
import filter from 'lodash/filter';

const INITIAL_STATE = {
  startDate: undefined,
  endDate: undefined,
  name: "",
  campaigns: [],
  filteredCampaigns: [],
  isLoading: false
};

export default function SearchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.UPDATE_CAMPAIGNS:
      return {
        ...state,
        campaigns: state.campaigns.concat(action.data),
        filteredCampaigns: state.campaigns.concat(action.data)
      };
    case TYPES.ON_START_DATE_CHANGE:
      return {
        ...state,
        startDate: action.data
      };
    case TYPES.ON_END_DATE_CHANGE:
      return {
        ...state,
        endDate: action.data
      };
    case TYPES.ON_NAME_CHANGE:
      return {
        ...state,
        name: action.data
      };
    case TYPES.ON_SEARCH:
      return {
        ...state,
        filteredCampaigns: doFilter(state.campaigns, {name: state.name, startDate: state.startDate, endDate: state.endDate})
      };
    default:
      return state;
  }
}

function doFilter(campaigns, filters) {
  const fStartDate = filters.startDate;
  const fEndDate = filters.endDate;
  return filter(campaigns, (c) => {
    let {name, startDate, endDate} = c;
    name = name.toLowerCase();
    startDate = getMomentCompatibleFormat(startDate);
    endDate = getMomentCompatibleFormat(endDate);
    return (
      name.includes(filters.name.toLowerCase()) &&
      ((fStartDate && isSameOrAfter(startDate, fStartDate)) || !fStartDate) &&
      ((fEndDate && isSameOrBefore(endDate, fEndDate)) || !fEndDate)
    );
  });
}
