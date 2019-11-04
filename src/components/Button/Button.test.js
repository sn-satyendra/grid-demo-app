import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button>B1</Button>);
    expect(wrapper).to.have.lengthOf(1);
    expect(wrapper.getElement().props.className).to.equal('button primary');
    expect(wrapper.getElement().props.children).to.equal('B1');
  });

  it('renders a disabled button', () => {
    const wrapper = shallow(<Button disabled>B1</Button>);
    console.log(wrapper.getElement());
    expect(wrapper.html()).to.include('disabled=""');
    expect(wrapper.getElement().props.onClick).to.equal(undefined);
  });

  it('renders button with click handler', () => {
    const wrapper = shallow(<Button onClick={()=>{}}>B1</Button>);
    expect(wrapper.getElement().props.onClick).to.be.an.instanceof(Function);
  });
});