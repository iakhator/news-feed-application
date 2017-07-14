import React from 'react';
import renderer from 'react-test-renderer';
import SearchField from '../../src/components/SearchField';

describe('SearchField', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SearchField />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
