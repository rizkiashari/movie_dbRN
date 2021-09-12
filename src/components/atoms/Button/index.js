import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICAdd, ICBack, ICDown, ICNext, ICSearch, ICUp} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Button = ({type, title, onPress, width}) => {
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
  if (type === 'add') {
    return (
      <TouchableOpacity onPress={onPress}>
        <ICAdd />
      </TouchableOpacity>
    );
  }
  if (type === 'search') {
    return (
      <TouchableOpacity onPress={onPress}>
        <ICSearch />
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
    <TouchableOpacity style={styles.container(type, width)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type, width) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
    width: width,
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
