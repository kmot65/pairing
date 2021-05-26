import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import { Header } from 'semantic-ui-react';

it('renders heading and text', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(Header).length).toBe(1);
  expect(wrapper.find('p').length).toBeGreaterThan(0);
});
