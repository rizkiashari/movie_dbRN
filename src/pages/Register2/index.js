import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {Button, Gap} from '../../components';
import {colors, fonts, getData, storeData} from '../../utils';

const Register2 = ({navigation}) => {
  const radioButtonsData = [
    {
      id: '1',
      label: 'Yes',
      value: 'Yes',
    },
    {
      id: '2',
      label: 'No',
      value: 'No',
    },
  ];
  const [err, setErr] = useState('');
  const [isErr, setIsErr] = useState(false);
  const [border, setBorder] = useState(colors.border);
  const [borderNum, setBorderNum] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };

  const [yesno, setYesno] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const nextForm = () => {
    if (yesno === '') {
      setIsErr(true);
      setErr('Please select yes or no');
    } else if (address === '') {
      setIsErr(true);
      setErr('Please input address');
    } else if (mobileNumber === '') {
      setIsErr(true);
      setErr('Please input Mobile Number');
    } else {
      storeData('user2', data);
      setIsErr(false);
      navigation.navigate('DataRegister');
    }
  };
  const backForm = () => {
    navigation.goBack();
  };
  const [profile, setProfile] = useState({
    yesno: '',
    address: '',
    mobileNumber: '',
  });
  useEffect(() => {
    getData('user2').then(res => {
      setProfile(res);
    });
  }, []);
  const data = {
    yesno: yesno,
    address: address,
    mobileNumber: mobileNumber,
  };
  return (
    <View style={styles.page}>
      <ScrollView>
        <Gap height={30} />
        <Text style={styles.textJudul}>Information B</Text>
        <Gap height={20} />
        <Text style={styles.text}>Have a Laptop / PC</Text>
        <Gap height={20} />
        <RadioForm
          radio_props={radioButtonsData}
          onPress={value => setYesno(value)}
          labelColor={colors.primary}
          buttonColor={colors.primary}
          formHorizontal={true}
          labelHorizontal={true}
          initial={'Yes'}
        />
        <Gap height={20} />
        <Text style={styles.text}>Address</Text>
        <Gap height={20} />
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.textarea(border)}
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <Gap height={20} />
        <Text style={styles.text}>Mobile Number</Text>
        <Gap height={20} />
        <TextInput
          keyboardType="numeric"
          style={styles.numberText(borderNum)}
          value={mobileNumber}
          onChangeText={text => setMobileNumber(text)}
        />
        <Gap height={30} />
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

export default Register2;

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
  textarea: borderNum => ({
    borderWidth: 1,
    borderColor: borderNum,
    borderRadius: 10,
    padding: 12,
    color: colors.primary,
    marginRight: 16,
    width: '100%',
    height: 150,
    justifyContent: 'flex-start',
  }),
  numberText: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
    width: '100%',
    color: colors.primary,
    marginRight: 16,
  }),
  buttonBawah: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
