import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../src/components/Loader';

describe('Loader ', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
