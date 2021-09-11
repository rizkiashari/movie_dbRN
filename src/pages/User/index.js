import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts} from '../../utils';

const UserProfile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Gap height={100} />
        <Image source={DummyUser} style={styles.avatar} />
        <View>
          <Text style={styles.name}>Rizki Ashari</Text>
          <Text style={styles.professsion}>Programmer</Text>
          <Text style={styles.professsion}>rizkiashari1026@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {justifyContent: 'center', alignItems: 'center'},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 16,
    textAlign: 'center',
  },
  professsion: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
});
