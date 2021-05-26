import React from 'react';
import Medals from './Medals';
import { shallow, mount } from 'enzyme';
import { Header, Table } from 'semantic-ui-react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

const mockData = {
  data: [
    {
      ID: '16',
      Name: 'Juhamatti Tapio Aaltonen',
      Sex: 'M',
      Age: '28',
      Height: '184',
      Weight: '85',
      NOC: 'FIN',
      Games: '2014 Winter',
      Year: '2014',
      Season: 'Winter',
      City: 'Sochi',
      Sport: 'Ice Hockey',
      Event: "Ice Hockey Men's Ice Hockey",
      Medal: 'Bronze'
    }
  ]
};

it('renders heading and table', () => {
  const wrapper = shallow(<Medals />);
  expect(wrapper.find(Header).length).toBe(1);
  expect(wrapper.find(Table).length).toBe(1);
});

// This test is a bit of a mess: seems enzyme support for useEffect hook is a bit broken
// More info here: https://github.com/airbnb/enzyme/issues/2073
it('renders table with data from API', async () => {
  let wrapper;
  await act(async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
    wrapper = await mount(<Medals />);
  });
  wrapper.update();
  expect(wrapper.find(Table.Header).length).toBe(1);
  expect(wrapper.find(Table.Body).length).toBe(1);
  expect(wrapper.find(Table.Body).find(Table.Row).length).toBe(1);
  expect(
    wrapper
      .find(Table.Body)
      .find(Table.Row)
      .find('#name')
      .at(0)
      .text()
  ).toBe('Juhamatti Tapio Aaltonen');
});
