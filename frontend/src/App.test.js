import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';

it('renders nav menu', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Menu).length).toBe(1);
});

// TODO: test Routing
