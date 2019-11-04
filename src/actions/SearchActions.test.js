import * as actions from './SearchActions';
import * as TYPES from './ActionTypes';

describe('Search actions', () => {
  it('should create a action for start date change', () => {
    expect(
      actions.onStartDateChange('2019-12-10')
    ).toEqual({
      type: TYPES.ON_START_DATE_CHANGE,
      data: '2019-12-10'
    });
  });

  it('should create a action for end date change', () => {
    expect(
      actions.onEndDateChange('2019-12-10')
    ).toEqual({
      type: TYPES.ON_END_DATE_CHANGE,
      data: '2019-12-10'
    });
  });

  it('should create a action for name change', () => {
    expect(
      actions.onNameChange('abc')
    ).toEqual({
      type: TYPES.ON_NAME_CHANGE,
      data: 'abc'
    });
  });

  it('should create a action for updating the campaigns', () => {
    expect(
      actions.updateCampaigns([{
        "id": 1,
        "name": "Divavu",
        "startDate": "9/1/2019",
        "endDate": "3/12/2019",
        "Budget": 88377
      }, {
        "id": 2,
        "name": "Jaxspan",
        "startDate": "11/21/2017",
        "endDate": "2/21/2018",
        "Budget": 608715
      }])
    ).toEqual({
      type: TYPES.UPDATE_CAMPAIGNS,
      data: [{
        "id": 1,
        "name": "Divavu",
        "startDate": "9/1/2019",
        "endDate": "3/12/2019",
        "Budget": 88377
      }, {
        "id": 2,
        "name": "Jaxspan",
        "startDate": "11/21/2017",
        "endDate": "2/21/2018",
        "Budget": 608715
      }]
    });
  });
});