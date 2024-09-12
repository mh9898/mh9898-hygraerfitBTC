import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface SocialLoginButtonsProps {}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = () => {
  const socialIcons = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/37fe9a546fbfb79132f9c0e2b923a5f292eefbec422a28172d24da1108b85ac9?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/c8be02e46a91042d2a2fbc5b15db45488f5e307fd698483b85fd554f69ab0889?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/9793d06e41f93ccb03a1095a832227afbeb4d966e5d232b9de7cb25be3449a10?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399',
  ];

  return (
    <View style={styles.container}>
      {socialIcons.map((icon, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Image
            resizeMode="contain"
            source={{uri: icon}}
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 26,
  },
  button: {
    width: 120,
    aspectRatio: 1.88,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default SocialLoginButtons;
