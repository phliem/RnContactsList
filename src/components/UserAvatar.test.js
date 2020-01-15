import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';

// Components
import UserAvatar from './UserAvatar';

describe('Should test UserAvatar Component', () => {
  test('render and match snapshot', () => {
    const testRender = renderer.create(
      <UserAvatar id={'AVATAR_ID'} isActive={false} />,
    );
    const testInstance = testRender.toJSON();
    expect(testInstance).toMatchSnapshot();
  });
});
