import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components';
import {clearAll, colors, fonts, getData, removeData} from '../../utils';

const DataRegister = ({navigation}) => {
  const nextForm = () => {
    removeData('user');
    removeData('user2');
    clearAll();
    navigation.navigate('Confirm');
  };
  const backForm = () => {
    navigation.goBack();
  };
  const [profile2, setProfile2] = useState({
    yesno: '',
    address: '',
    mobileNumber: '',
  });
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    valueJob: [],
    gender: '',
  });
  useEffect(() => {
    getData('user').then(res => {
      setProfile(res);
    });
    getData('user2').then(res => {
      setProfile2(res);
    });
  }, []);
  return (
    <View style={styles.page}>
      <ScrollView>
        <Gap height={30} />
        <Text style={styles.textJudul}>Confirmation data of entry</Text>
        <Gap height={40} />
        <Text style={styles.text}>
          Fullname: {profile?.firstName} {profile?.lastName}{' '}
        </Text>
        <Gap height={30} />
        <Text style={styles.text}>
          Jobdesc:{' '}
          {profile?.valueJob?.map((item, idx) => (
            <Text key={idx + 1} style={styles.text}>
              {item},
            </Text>
          ))}{' '}
        </Text>
        <Gap height={30} />
        <Text style={styles.text}>Gender: {profile?.gender}</Text>
        <Gap height={30} />
        <Text style={styles.text}>E-mail: {profile?.email} </Text>
        <Gap height={30} />
        <Text style={styles.text}>Have a Laptop/PC: {profile2?.yesno} </Text>
        <Gap height={30} />
        <Text style={styles.text}>Mobile number: {profile2?.mobileNumber}</Text>
        <Gap height={30} />
        <Text style={styles.text}>Address: {profile2?.address}</Text>
        <Gap height={50} />
        <View style={styles.buttonBawah}>
          <Button
            title="Back"
            width={100}
            type="secondary"
            onPress={backForm}
          />
          <Button title="Next" width={100} onPress={nextForm} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DataRegister;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },
  textJudul: {
    color: colors.primary,
    fontFamily: fonts.primary.normal,
    fontSize: 20,
  },
  text: {
    color: colors.primary,
    fontFamily: fonts.primary.normal,
    fontSize: 16,
  },
  buttonBawah: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
});
