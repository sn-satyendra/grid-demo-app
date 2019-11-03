import * as TYPES from '../actions/ActionTypes';
// import update from 'immutability-helper';
import {AddCampaigns} from '../utils/DataUtil';

const INITIAL_STATE = {
  startDate: undefined,
  endDate: undefined,
  search: "",
  campaigns: AddCampaigns([]),
  isLoading: false
};

export default function SearchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
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
        search: action.data
      };
    case TYPES.ON_SEARCH:
      return {
        ...state,
        // TODO: Filter
        campaigns: []
      };
    default:
      return state;
  }
}
