import * as TYPES from '../actions/ActionTypes';
import reducer from './SearchReducer';

const INITIAL_STATE = {
  startDate: undefined,
  endDate: undefined,
  name: "",
  campaigns: [],
  filteredCampaigns: [],
  isLoading: false
};

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it('should update the campaigns list', () => {
    let mockData = [{
      "id": 1,
      "name": "Divavu",
      "startDate": "9/1/2019",
      "endDate": "3/12/2019",
      "Budget": 88377
    }];
    expect(
      reducer(INITIAL_STATE, {
        type: TYPES.UPDATE_CAMPAIGNS,
        data: mockData
      })
    ).toEqual({
      ...INITIAL_STATE,
      campaigns: mockData,
      filteredCampaigns: mockData
    });
  });

  it('should update the start date when changed', () => {
    let mockData = '2019-12-10';
    expect(
      reducer(INITIAL_STATE, {
        type: TYPES.ON_START_DATE_CHANGE,
        data: mockData
      })
    ).toEqual({
      ...INITIAL_STATE,
      startDate: mockData
    });
  });

  it('should update the end date when changed', () => {
    let mockData = '2019-12-10';
    expect(
      reducer(INITIAL_STATE, {
        type: TYPES.ON_END_DATE_CHANGE,
        data: mockData
      })
    ).toEqual({
      ...INITIAL_STATE,
      endDate: mockData
    });
  });

  it('should update the name when changed', () => {
    let mockData = 'abc';
    expect(
      reducer(INITIAL_STATE, {
        type: TYPES.ON_NAME_CHANGE,
        data: mockData
      })
    ).toEqual({
      ...INITIAL_STATE,
      name: mockData
    });
  });
});