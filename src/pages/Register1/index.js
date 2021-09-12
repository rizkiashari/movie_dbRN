import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input} from '../../components';
import {colors, fonts, getData, storeData} from '../../utils';

const Register1 = ({navigation}) => {
  const pickerRef = useRef();
  const [gender, setGender] = useState('Male');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [valueJob, setValueJob] = useState([]);
  const [inputJob, setInputJob] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  const [isErr, setIsErr] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    valueJob: [],
    gender: '',
  });
  const data = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    email: email,
    valueJob: valueJob,
  };
  useEffect(() => {
    getData('user').then(res => {
      setProfile(res);
    });
  }, []);
  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const validGender = text => {
    setGender(text);
  };

  const onJob = () => {
    setValueJob([inputJob, ...valueJob]);
  };

  const nextForm = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!gender || !firstName || !lastName || !email || !valueJob) {
      setIsErr(true);
      setErr('Wajib diisi');
      setIsErr(true);
      if (reg.test(email) === false) {
        setIsErr(true);
        console.log('Erorr Email');
        setErr('Email Salah');
      }
    } else {
      storeData('user', data);
      setIsErr(false);
      navigation.navigate('Register2');
    }
  };
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.content}>
          <Gap height={30} />
          <Text style={styles.text}>Information A </Text>
          <Gap height={20} r />
          <View style={styles.wrapper}>
            <View style={styles.input}>
              <Input
                label="First Name"
                value={firstName}
                onChangeText={value => setFirstName(value)}
              />
              <Input
                label="Last Name"
                value={lastName}
                onChangeText={value => setLastName(value)}
              />
            </View>
          </View>
          <Gap height={20} />
          <Input
            label="Jobdesc"
            width="text"
            value={inputJob}
            onChangeText={value => setInputJob(value)}
          />
          <View style={styles.jobWrap}>
            <Button type="add" onPress={onJob} />
          </View>
          <Gap height={15} />
          {valueJob.length > 0 &&
            valueJob.map((item, index) => (
              <View style={styles.job}>
                <Text numberOfLines={1} key={index + 1} style={styles.jobText}>
                  {item}
                </Text>
              </View>
            ))}
          <Gap height={20} />
          <Picker
            ref={pickerRef}
            style={styles.picker}
            mode="dropdown"
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => validGender(itemValue)}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
          <Gap height={20} />
          <Input
            label="Email"
            width="text"
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <Gap height={20} />
        {isErr && (
          <Text style={{color: 'red', paddingHorizontal: 16}}>{err}</Text>
        )}
        <View style={styles.buttonNext}>
          <Gap width={400} />
          <View style={styles.wrap}>
            <Button title="Next" width={100} onPress={nextForm} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.primary,
    fontFamily: fonts.primary.normal,
    fontSize: 20,
  },
  jobText: {
    color: colors.primary,
    fontFamily: fonts.primary.normal,
    fontSize: 16,
  },
  input: {
    flexDirection: 'row',
    marginRight: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  picker: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 16,
    color: colors.text.primary,
  },
  buttonNext: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  wrap: {
    marginRight: 16,
  },
  job: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
    height: 60,
    borderRadius: 20 / 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  wrapper: {
    paddingRight: 16,
  },
  jobWrap: {
    position: 'absolute',
    right: 25,
    top: 235,
  },
});
