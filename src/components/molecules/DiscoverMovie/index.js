import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {colors, fonts} from '../../../utils';

const DiscoverMovie = ({onPress, image, judul, rating}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.context}>
          <Text numberOfLines={1} style={styles.judul}>
            {judul}
          </Text>
        </View>
        <View>
          <Text style={styles.rating}> Rating: {rating}</Text>
          <Rating
            type="custom"
            readonly
            imageSize={20}
            ratingColor="#FF7314"
            ratingBackgroundColor="#22211F"
            ratingCount={5}
            startingValue={rating}
            style={{marginLeft: -32}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DiscoverMovie;

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
  rating: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.primary,
  },
  context: {
    width: 130,
  },
});
