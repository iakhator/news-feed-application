import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../../src/components/NotFound';

describe('NotFound Page', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
