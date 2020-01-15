import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Platform } from 'react-native';

// Components
import UserDetailsScrollV from './UserDetailsScrollV';

describe('Should test UserDetailsScrollV Component', () => {
  const pageRefMock = jest.fn(() => {});
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
      <UserDetailsScrollV
        pageRef={pageRefMock}
        data={dataMock}
        itemHeight={100}
        scrollToUser={scrollToUserMock}
      />,
    );

    instance = wrapper.instance();

    jest.clearAllMocks();
  });

  describe('onScrollEndDrag should trigger a callback to scroll the lists down', () => {
    let eMock;
    beforeEach(() => {
      eMock = {
        nativeEvent: {
          velocity: {
            y: 10,
          },
        },
      };
    });

    test('on iOS', () => {
      Platform.OS = 'ios';
      instance.onScrollEndDrag(eMock);
      expect(scrollToUserMock).toBeCalledWith({ direction: 1 });
    });

    test('on Android', () => {
      Platform.OS = 'android';
      instance.onScrollEndDrag(eMock);
      expect(scrollToUserMock).toBeCalledWith({ direction: -1 });
    });
  });

  describe('onScrollEndDrag should trigger a callback to scroll the lists up', () => {
    let eMock;
    beforeEach(() => {
      eMock = {
        nativeEvent: {
          velocity: {
            y: -10,
          },
        },
      };
    });

    test('on iOS', () => {
      Platform.OS = 'ios';
      instance.onScrollEndDrag(eMock);
      expect(scrollToUserMock).toBeCalledWith({ direction: -1 });
    });

    test('on Android', () => {
      Platform.OS = 'android';
      instance.onScrollEndDrag(eMock);
      expect(scrollToUserMock).toBeCalledWith({ direction: 1 });
    });
  });
});
