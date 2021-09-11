import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../..';
import {colors, fonts} from '../../../utils';

const TopRate = ({title, vote, release, rating, image, onPress}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>Vote: {vote} </Text>
        <Text style={styles.text}>Release Date: {release} </Text>
        <Text style={styles.text}>Rating: {rating} </Text>
      </View>
      <View style={styles.button}>
        <Button type="next" onPress={onPress} />
      </View>
    </View>
  );
};

export default TopRate;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginBottom: 12,
  },
  image: {
    width: 90,
    height: 110,
    borderRadius: 30 / 2,
  },
  text: {
    fontFamily: fonts.primary[400],
    fontSize: 13,
    paddingHorizontal: 16,
    color: colors.secondary,
    marginBottom: 11,
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    paddingHorizontal: 16,
    color: colors.primary,
    marginBottom: 14,
  },
  button: {
    position: 'absolute',
    right: 5,
    bottom: 10,
  },
});
