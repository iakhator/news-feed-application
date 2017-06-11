import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount , render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Nav from '../../components/header/Nav';

describe('Nav', () => {
  it('renders without crashing', () => {
    mount(<Nav />);
  });
});