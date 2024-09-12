import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/923f3376317db90b2f88d327dee8763b0e2e22c1863d809e52171e50b07f5e0e?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399',
          }}
          style={styles.logo}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/acc32e884f3d5842a9453e15e3184525409e51cf928876d6e96bd85eb347c63c?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399',
          }}
          style={styles.logoText}
        />
      </View>
      <TouchableOpacity style={styles.backButton}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13205113ddbf3be86d59c08431c49a62491e9cbf59fb3a24494dd86762468518?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399',
          }}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 19,
    paddingTop: 14,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  logo: {
    width: 61,
    aspectRatio: 2.54,
    borderRadius: 36,
  },
  logoText: {
    width: 76,
    aspectRatio: 5.85,
  },
  backButton: {
    backgroundColor: 'rgba(248, 247, 247, 1)',
    borderRadius: 12,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(90, 97, 135, 1)',
  },
  backIcon: {
    width: 24,
    aspectRatio: 1,
  },
});

export default Header;
