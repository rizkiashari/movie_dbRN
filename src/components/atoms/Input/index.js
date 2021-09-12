import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  width,
  placeholder,
  disable,
}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border, width)}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border, width) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
    width: width === 'text' ? '100%' : 200,
    color: colors.primary,
    marginRight: 16,
  }),
  label: {
    fontSize: 18,
    color: colors.primary,
    marginBottom: 16,
    fontFamily: fonts.primary[600],
  },
});
