import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {clearAll, removeData} from '../../utils';

const Confirm = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      removeData('user');
      removeData('user2');
      clearAll();
      navigation.replace('MainApp');
    }, 2000);
  }, []);
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Thank you for submit form</Text>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
