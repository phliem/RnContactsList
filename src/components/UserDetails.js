// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Constants & Services
import type USER from '../res/types';
import COLORS from '../res/colors';
import TYPOGRAPHY from '../res/typography';
import SIZES from '../res/sizes';

type PROPS = {
  style: {},
  user: USER,
};

const UserDetails = (props: PROPS) => {
  return (
    <View style={[props.style, styles.wrap]}>
      <View style={styles.title}>
        <Text style={TYPOGRAPHY.h1}>
          {props.user.firstname}{' '}
          <Text style={styles.regular}>{props.user.lastname}</Text>
        </Text>
        <Text style={TYPOGRAPHY.h2}>{props.user.job}</Text>
      </View>
      <View style={styles.separator} />
      <Text style={TYPOGRAPHY.h3}>About me</Text>
      <Text style={TYPOGRAPHY.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
        architecto hic optio illum rerum, nisi sunt accusantium in vero
        voluptate similique earum quidem possimus, dolores saepe nobis
        perspiciatis dignissimos reiciendis. At vero eos et accusamus et iusto
        odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt
        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
        facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
        facere possimus, omnis voluptas assumenda est.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.backgroundMain,
    padding: SIZES.spaceM,
  },
  title: {
    marginTop: SIZES.spaceM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regular: {
    fontWeight: 'normal',
  },
  separator: {
    borderWidth: 0.5,
    borderColor: COLORS.light,
    margin: SIZES.spaceL,
  },
});

export default UserDetails;
