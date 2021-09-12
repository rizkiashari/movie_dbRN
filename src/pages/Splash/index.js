import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../assets';
import {colors} from '../../utils';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Register1');
    }, 5000);
  }, []);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>Welcome To TMDB</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  image: {
    width: '50%',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: colors.primary,
  },
});
