import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../Nav';

it('renders to match the snapshot', () => {
  const tree = renderer.create(<Nav />).toJSON();
  expect(tree).toMatchSnapshot();
});
