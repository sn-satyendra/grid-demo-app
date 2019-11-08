import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CampaignState from './CampaignState';

Enzyme.configure({ adapter: new Adapter() });

describe('CampaignState', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CampaignState 
        currentDate="08/11/2019"
        startDate="01/11/2019"
        endDate="30/11/2019"
      />);
    expect(wrapper).to.have.lengthOf(1);
    expect(wrapper.getElement().props.className).to.equal('ct');
  });

  it('shows active indicator', () => {
    const wrapper = shallow(<CampaignState 
        currentDate="08/11/2019"
        startDate="01/11/2019"
        endDate="30/11/2019"
      />);
      expect(wrapper.find('.state').getElement().props.children).to.equal('Active');
  });

  it('shows inactive indicator', () => {
    const wrapper = shallow(<CampaignState 
        currentDate="08/10/2019"
        startDate="01/11/2019"
        endDate="30/11/2019"
      />);
      expect(wrapper.find('.state').getElement().props.children).to.equal('Inactive');
  });

  it('shows inactive indicator if current date not passed', () => {
    const wrapper = shallow(<CampaignState 
        currentDate=""
        startDate="01/11/2019"
        endDate="30/11/2019"
      />);
      expect(wrapper.find('.state').getElement().props.children).to.equal('Inactive');
  });

});