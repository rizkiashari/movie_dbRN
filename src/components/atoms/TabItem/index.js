import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICHomeActive,
  ICHomeInActive,
  ICUserActive,
  ICUserInActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeActive /> : <ICHomeInActive />;
    }
    if (title === 'User') {
      return active ? <ICUserActive /> : <ICUserInActive />;
    }

    return <ICHomeActive />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 15,
    color: active ? colors.secondary : colors.primary,
    fontFamily: fonts.primary[500],
    marginTop: 4,
  }),
});
