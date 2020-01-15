import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Components
import UserDetails from './UserDetails';

describe('Should test UserDetails Component', () => {
  test('render and match snapshot', () => {
    const props = {
      firstname: 'Liem',
      lastname: 'Pham',
      job: 'Developer',
    };

    const testRender = renderer.create(<UserDetails user={props} />);
    const testInstance = testRender.toJSON();
    expect(testInstance).toMatchSnapshot();
  });
});
