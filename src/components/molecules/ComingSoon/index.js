import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
const CommingSoon = ({onPress, image, title}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: `http://image.tmdb.org/t/p/w780${image}`,
        }}
      />
      <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommingSoon;

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.secondary,
    fontFamily: fonts.primary[700],
  },
  textContent: {
    position: 'absolute',
    width: 200,
    top: 30,
    left: 20,
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 50 / 2,
  },
});
