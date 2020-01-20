// @flow
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { HeaderHeightContext } from 'react-navigation-stack';

// Components
import UserAvatarScrollH from './UserAvatarScrollH';
import UserDetailsScrollV from './UserDetailsScrollV';

// Constants & Services
import DATA from '../data/users.mock.json';
import SIZES from '../res/sizes';
import { getValidIndex } from '../res/utils';

type STATE = {
  selectedIndex: number,
};

class ContactsScreen extends React.PureComponent<null, STATE> {
  static contextType = HeaderHeightContext;

  avatarRef: any = React.createRef();
  pageRef: any = React.createRef();

  state = {
    selectedIndex: 0,
  };

  /**
   * Calculate the screen height available for UserDetailsScrollV
   * This will depends on the screensize.
   * It is used by getItemLayout for optimisation
   * @returns {Number} Available height on the screen
   */
  getUserDetailsHeight = () => {
    const { height } = Dimensions.get('window');
    const userAvatarHeight = SIZES.avatarHeight + SIZES.avatarMarginV * 2;
    const navigationHeight = isNaN(this.context) ? 0 : this.context;
    return height - navigationHeight - userAvatarHeight;
  };

  /**
   * Scroll both Avatar and Details list to a given user
   * One of the two params "direction" or "toIndex" is mandatory
   * @param {Number} [optional] params.direction - if present scroll from current position (possible values: -1|1)
   * @param {Number} [optional] params.toIndex - if no direction, scroll directly to an index
   */
  scrollToUser = ({
    direction,
    toIndex = 0,
  }: {
    direction?: number,
    toIndex?: number,
  }) => {
    // Get the relevant index to scroll to
    let nextIndex: number = direction
      ? this.state.selectedIndex + direction
      : toIndex;
    nextIndex = getValidIndex(nextIndex, DATA.length);

    // Scroll both list to an index
    if (this.avatarRef && this.avatarRef.current) {
      this.avatarRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
        viewOffset: 165,
      });
    }
    if (this.pageRef && this.pageRef.current) {
      this.pageRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }

    this.setState({ selectedIndex: nextIndex });
  };

  render() {
    return (
      <View style={styles.wrap}>
        <UserAvatarScrollH
          avatarRef={this.avatarRef}
          data={DATA}
          scrollToUser={this.scrollToUser}
          selectedIndex={this.state.selectedIndex}
        />

        <UserDetailsScrollV
          pageRef={this.pageRef}
          data={DATA}
          scrollToUser={this.scrollToUser}
          itemHeight={this.getUserDetailsHeight()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

export default ContactsScreen;
