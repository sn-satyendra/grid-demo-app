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

  it('renders a table with headers and no data', () => {
    const wrapper = shallow(<Table
      Thead={<thead>
          <tr>
            <th>c1</th>
            <th>c2</th>
          </tr>
        </thead>}
    />);
    expect(wrapper.find('thead > tr').getElement().props.children).to.have.lengthOf(2);
  });
});