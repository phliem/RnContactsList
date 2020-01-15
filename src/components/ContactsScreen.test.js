import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

// Components
import ContactsScreen from './ContactsScreen';

// Constants & Services
import DATA from '../data/users.mock.json';

jest.mock('react-native/Libraries/BatchedBridge/NativeModules', () => ({
  RNGestureHandlerModule: {
    Directions: jest.fn(),
  },
  PlatformConstants: {
    getConstants: () => ({
      isTesting: true,
    }),
  },
  DeviceInfo: { getConstants: jest.fn() },
  StatusBarManager: {
    getConstants: () => ({
      DEFAULT_BACKGROUND_COLOR: 'grey',
    }),
  },
}));
jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn(() => ({ height: 1104, width: 500 })),
}));

describe('Should test ContactsScreen Component', () => {
  let instance;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContactsScreen />);
    instance = wrapper.instance();
    jest.clearAllMocks();
  });

  test('getUserDetailsHeight should return the available height', () => {
    const pageHeight = instance.getUserDetailsHeight();
    expect(pageHeight).toBe(1000);
  });

  test('scrollToUser should scroll forward', () => {
    expect(instance.state.selectedIndex).toBe(0);
    instance.scrollToUser({ direction: 1 });
    expect(instance.state.selectedIndex).toBe(1);
  });

  test('scrollToUser should not scroll at the initial position', () => {
    expect(instance.state.selectedIndex).toBe(0);
    instance.scrollToUser({ direction: -1 });
    expect(instance.state.selectedIndex).toBe(0);
  });

  test('scrollToUser should scroll backward', () => {
    wrapper.setState({ selectedIndex: 5 });
    expect(instance.state.selectedIndex).toBe(5);
    instance.scrollToUser({ direction: -1 });
    expect(instance.state.selectedIndex).toBe(4);
  });

  test('scrollToUser should scroll to index', () => {
    expect(instance.state.selectedIndex).toBe(0);
    instance.scrollToUser({ toIndex: 5 });
    expect(instance.state.selectedIndex).toBe(5);
  });

  test('scrollToUser to invalid high index', () => {
    expect(instance.state.selectedIndex).toBe(0);
    instance.scrollToUser({ toIndex: 999 });
    expect(instance.state.selectedIndex).toBe(DATA.length - 1);
  });
});
