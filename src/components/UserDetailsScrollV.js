// @flow
import React from 'react';
import { FlatList, Platform } from 'react-native';

// Components
import UserDetails from './UserDetails';

// Constants & Services
import type USER from '../res/types';

type PROPS = {
  pageRef: {
    current: ?HTMLDivElement,
  },
  data: Array<USER>,
  scrollToUser: function,
  itemHeight: number,
};

class UserDetailsScrollV extends React.PureComponent<PROPS> {
  onScrollEndDrag = (e: {nativeEvent: {velocity: {y: number}}}) => {
    const velocityY = e.nativeEvent.velocity.y;
    let direction;

    if (Platform.OS === 'ios') {
      direction = velocityY >= 0 ? 1 : -1;
    } else {
      direction = velocityY <= 0 ? 1 : -1;
    }

    this.props.scrollToUser({ direction });
  };

  getItemLayout = (data: Array<{}>, index: number) => ({
    length: this.props.itemHeight,
    offset: this.props.itemHeight * index,
    index,
  });

  renderItem = ({ item }: {item: USER}) => (
    <UserDetails
      user={item}
      style={{
        height: this.props.itemHeight,
      }}
    />
  );

  render() {
    return (
      <FlatList
        ref={this.props.pageRef}
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        getItemLayout={this.getItemLayout}
        onScrollEndDrag={this.onScrollEndDrag}
      />
    );
  }
}

export default UserDetailsScrollV;
