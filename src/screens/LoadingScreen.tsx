import React, {useTransition} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

import InputField from '../components/InputField';
import SocialLoginButtons from '../components/SocialLoginButtons';
import useColors from '../hooks/useColors';
import HYcolors from '../utils/HYcolors';
import {useTranslation} from 'react-i18next';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const direction = 'rtl'; //{['ltr', 'rtl']}

  const {HYcolors, applyColors} = useColors();

  const {t} = useTranslation();

  return (
    <View style={[styles.container, {direction}]}>
      <Header />
      <View style={[styles.content]}>
        <Text style={styles.welcomeText}>{t('hello')}</Text>
        <Text style={styles.welcomeText}>Welcome back!</Text>

        <Text style={styles.subText}>It's great to see you again</Text>

        <InputField
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3714e596ada489c3e3c77e539d3c008454301b81bf197964bbbdf8db70a5f603?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399"
          placeholder="Enter your Email"
          value="Israel@Israeli.com"
        />
        <InputField
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3f4eb3d0bfa04fb28baef84c22321251a21229269602efde5c85864980cfe489?placeholderIfAbsent=true&apiKey=fb39d1e662864386a68d43f8ad8c3399"
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or Login with</Text>
          <View style={styles.dividerLine} />
        </View>

        <SocialLoginButtons />

        <Text style={styles.registerText}>
          <Text style={styles.registerTextNormal}>Don't have an account? </Text>
          <Text style={styles.registerTextBold}>Register Now</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HYcolors.light.white, //'#FFF',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  content: {
    width: '100%',
    maxWidth: 480,
    paddingHorizontal: 19,
    paddingBottom: 30,
    direction: 'rtl',
  },
  welcomeText: {
    color: '#262121',
    fontSize: 39,
    fontFamily: 'Poppins-Bold',
    marginTop: 30,
  },
  subText: {
    color: '#262121',
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
  },
  forgotPassword: {
    color: '#6A707C',
    textAlign: 'right',
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 16,
    marginTop: 24,
  },
  loginButton: {
    backgroundColor: 'rgba(90, 97, 135, 1)',
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 37,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#F8F7F7',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8ECF4',
  },
  dividerText: {
    color: 'rgba(53, 57, 80, 1)',
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 16,
    marginHorizontal: 13,
  },
  registerText: {
    textAlign: 'center',
    marginTop: 176,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  registerTextNormal: {
    color: 'rgba(90,97,135,1)',
  },
  registerTextBold: {
    color: 'rgba(53,57,80,1)',
  },
});

export default LoginScreen;
