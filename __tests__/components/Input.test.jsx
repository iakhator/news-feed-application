import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../../src/components/Input';

describe('Input', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
