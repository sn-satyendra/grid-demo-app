import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchField from './SearchField';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchField', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SearchField 
        value="08/11/2019"
      />);
    expect(wrapper).to.have.lengthOf(1);
    expect(wrapper.getElement().props.className).to.equal('input');
  });
});