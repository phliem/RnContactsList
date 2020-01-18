// @flow
import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

// Components
import UserAvatar from './UserAvatar';

// Constants & Services
import type { USER } from '../res/types';
import SIZES from '../res/sizes';
import COLORS from '../res/colors';
const { width } = Dimensions.get('window');
const avatarOffsetH = width / 2 - SIZES.avatarWidth / 2 - SIZES.avatarMarginH;

type PROPS = {
  avatarRef: {
    current: ?HTMLDivElement,
  },
  data: Array<USER>,
  scrollToUser: ({ toIndex?: number, direction?: number }) => void,
  selectedIndex: number,
};

class UserAvatarScrollH extends React.PureComponent<PROPS> {
  /**
   * This is called when the Flatlist stop "sliding".
   * Update the User Details List
   * @param {Object} e
   */
  onMomentumScrollEnd = (e: {
    nativeEvent: { contentOffset: { x: number } },
  }) => {
    const currentOffsetX = e.nativeEvent.contentOffset.x;
    const toIndex = Math.round(currentOffsetX / SIZES.avatarInterval);
    this.props.scrollToUser({ toIndex });
  };

  /**
   * Update the User Details List
   * @param {Number} toIndex - user index in the list
   */
  onPress = (toIndex: number) => {
    this.props.scrollToUser({ toIndex });
  };

  renderItem = ({ item, index }: { item: USER, index: number }) => (
    <TouchableOpacity style={styles.avatar} onPress={() => this.onPress(index)}>
      <UserAvatar id={item.id} isActive={this.props.selectedIndex === index} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.wrap} elevation={10}>
        <FlatList
          ref={this.props.avatarRef}
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          snapToInterval={SIZES.avatarInterval}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          contentContainerStyle={styles.list}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.backgroundHead,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: COLORS.dark,
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  list: {
    marginVertical: SIZES.avatarMarginV,
    paddingHorizontal: avatarOffsetH,
  },
  avatar: {
    marginHorizontal: SIZES.avatarMarginH,
  },
});

export default UserAvatarScrollH;
