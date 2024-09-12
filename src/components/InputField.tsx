import React from 'react';
import {View, StyleSheet, Image, TextInput, Text} from 'react-native';

interface InputFieldProps {
  icon: string;
  placeholder: string;
  value?: string;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  placeholder,
  value,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{uri: icon}} style={styles.icon} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{placeholder}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7378c19a7c9a656c74071820268315a21d23b158275d73aa7314eb32a0e02ee5?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399',
        }}
        style={styles.rightIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 247, 247, 1)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(71, 77, 107, 1)',
    minHeight: 56,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  icon: {
    width: 24,
    aspectRatio: 1,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 8,
  },
  label: {
    color: '#9C8C8D',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    color: '#4F4545',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  rightIcon: {
    width: 24,
    aspectRatio: 1,
  },
});

export default InputField;
