import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './Table';

Enzyme.configure({ adapter: new Adapter() });

describe('Table', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Table/>);
    expect(wrapper).to.have.lengthOf(1);
    expect(wrapper.getElement().props.className).to.equal('table');
  });
});