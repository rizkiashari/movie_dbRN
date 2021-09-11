import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICBack, ICDown, ICNext, ICUp} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Button = ({type, title, onPress}) => {
  if (type === 'next') {
    return (
      <TouchableOpacity onPress={onPress}>
        <ICNext />
      </TouchableOpacity>
    );
  }
  if (type === 'up') {
    return (
      <TouchableOpacity onPress={onPress}>
        <ICUp />
      </TouchableOpacity>
    );
  }
  if (type === 'down') {
    return (
      <TouchableOpacity onPress={onPress}>
        <ICDown />
      </TouchableOpacity>
    );
  }
  if (type === 'back') {
    return (
      <TouchableOpacity onPress={onPress}>
        <ICBack />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
