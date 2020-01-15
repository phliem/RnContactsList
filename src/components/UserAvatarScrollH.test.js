import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

// Components
import UserAvatarScrollH from './UserAvatarScrollH';

describe('Should test UserAvatarScrollH Component', () => {
  const avatarRefMock = jest.fn(() => {});
  const dataMock = [
    {
      id: 'avatar1',
    },
    {
      id: 'avatar2',
    },
  ];
  const scrollToUserMock = jest.fn();
  let instance;

  beforeEach(() => {
    const wrapper = shallow(
      <UserAvatarScrollH
        avatarRef={avatarRefMock}
        data={dataMock}
        selectedIndex={1}
        scrollToUser={scrollToUserMock}
      />,
    );

    instance = wrapper.instance();

    jest.clearAllMocks();
  });

  test('onPress should trigger a callback to scroll the lists', () => {
    const avatarIndex = 5;
    instance.onPress(avatarIndex);

    expect(scrollToUserMock).toBeCalledWith({ toIndex: avatarIndex });
  });

  test('onMomentumScrollEnd should trigger a callback to scroll the lists', () => {
    const eMock = {
      nativeEvent: {
        contentOffset: {
          x: 84, // Second item of the list (index 1 in the array)
        },
      },
    };
    instance.onMomentumScrollEnd(eMock);
    expect(scrollToUserMock).toBeCalledWith({ toIndex: 1 });
  });
});
