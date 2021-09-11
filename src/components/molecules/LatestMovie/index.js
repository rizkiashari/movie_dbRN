import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const LatestMovie = ({onPress, image, judul}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.context}>
          <Text numberOfLines={1} style={styles.judul}>
            {judul}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LatestMovie;

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 160,
    borderRadius: 50 / 2,
    marginBottom: 10,
  },
  container: {
    marginRight: 10,
    paddingHorizontal: -16,
  },
  judul: {
    fontSize: 15,
    fontFamily: fonts.primary[700],
    color: colors.text.secondary,
    marginBottom: 5,
  },
  context: {
    width: 130,
  },
});
