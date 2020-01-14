// @flow
import React from 'react';
import { Image, StyleSheet } from 'react-native';

// Constants & Services
import AVATARS from '../res/avatars';
import COLORS from '../res/colors';
import SIZES from '../res/sizes';

type PROPS = {
  id: string,
  isActive: boolean,
};

const UserAvatar = (props: PROPS) => {
  const imageStyle = [styles.img];
  if (props.isActive) {
    imageStyle.push(styles.imgActive);
  }

  return <Image style={imageStyle} source={AVATARS[props.id]} />;
};

const styles = StyleSheet.create({
  img: {
    width: SIZES.avatarWidth,
    height: SIZES.avatarHeight,
  },
  imgActive: {
    borderWidth: 3,
    borderColor: COLORS.highlight,
    borderRadius: SIZES.avatarWidth / 2,
  },
});

export default UserAvatar;
