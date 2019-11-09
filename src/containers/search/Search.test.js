
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Search from './Search';
// import DateField from '../../components/DateField/DateField';
// import SearchField from '../../components/SearchField/SearchField';
// import Button from '../../components/Button/Button';
// import Table from '../../components/Table/Table';
import Adapter from 'enzyme-adapter-react-16';
import ConfigureStore from '../../store/ConfigureStore';
import {TEST_DATA} from '../../testData/TestData';
import {updateCampaigns} from '../../actions/SearchActions';

Enzyme.configure({ adapter: new Adapter() });

let spy;
beforeEach(() => {
  ConfigureStore().dispatch(updateCampaigns(TEST_DATA));
});

afterEach(() => {
  spy && spy.mockClear();
  enzymeWrapper && enzymeWrapper.unmount && enzymeWrapper.unmount();
});

let enzymeWrapper;

const props = {
  store: ConfigureStore(),
  startDate: "",
  endDate: "",
  name: "",
  filteredCampaigns: [].concat(TEST_DATA),
  isLoading: false,
  actions: {
    onStartDateChange: jest.fn(),
    onEndDateChange: jest.fn(),
    onNameChange: jest.fn(),
    onSearch: jest.fn(),
    updateCampaigns: jest.fn()
  }
};

describe('Search', () => {
  it('renders without crashing', () => {
    enzymeWrapper =shallow(<Search {...props} />).dive();
    expect(enzymeWrapper.exists()).toBe(true);
  });
});
