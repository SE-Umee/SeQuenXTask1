import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomInput from '../components/CustomInput';
import {Colors} from '../assets/constant/colors';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/slices/user-slice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {signupUser} from '../services/requests';
import Snackbar from 'react-native-snackbar';

const SignupScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [conformPasswordError, setConformPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConformPassword, setShowConformPassword] = useState(true);
  const [loader, setLoader] = useState(false);
  const handleValidation = () => {
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConformPasswordError('');

    if (!name.trim()) {
      setNameError('Name is required');
    } else if (name.length < 3) {
      setNameError('Name must have more than three characters');
    } else if (!/[a-zA-Z]/.test(name)) {
      setNameError('Name must contain at least one alphabet character');
    } else if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Email is invalid');
    } else if (!password.trim()) {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password must have more than eight characters');
    } else if (!conformPassword.trim()) {
      setConformPasswordError('Conform Password is required');
    } else if (conformPassword !== password) {
      setConformPasswordError('Password and Confirm Password do not match');
    } else if (
      nameError ||
      emailError ||
      passwordError ||
      conformPasswordError
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async () => {
    if (handleValidation()) {
      setLoader(true);
      const data = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(setUser({name, email, password}));
      const response = await signupUser(data);
      if (response.ok) {
        Snackbar.show({
          text: 'User successfully added',
          duration: Snackbar.LENGTH_SHORT,
        });
        console.log('User successfully signed up!');
        setLoader(false);
      } else {
        Snackbar.show({
          text: 'Error',
          duration: Snackbar.LENGTH_SHORT,
        });
        console.error(
          'Error signing up:',
          response.status,
          await response.text(),
        );
        setLoader(false);
      }
      setName('');
      setEmail('');
      setPassword('');
      setConformPassword('');
    }
  };

  const handleGoToHome = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.mainContainer}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.mainContainer}>
          <Text style={styles.headingText}>Signup</Text>
          <CustomInput
            value={name}
            setValue={setName}
            imagePath={require('../assets/icons/user-icon.png')}
            placeholder={'Username'}
            errorMessage={nameError}
            isPassword={false}
          />
          <CustomInput
            value={email}
            setValue={setEmail}
            imagePath={require('../assets/icons/email-icon.png')}
            placeholder={'Email'}
            errorMessage={emailError}
            isPassword={false}
          />
          <CustomInput
            value={password}
            setValue={setPassword}
            imagePath={require('../assets/icons/password-icon.png')}
            placeholder={'Password'}
            errorMessage={passwordError}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            isPassword={true}
          />
          <CustomInput
            value={conformPassword}
            setValue={setConformPassword}
            imagePath={require('../assets/icons/password-icon.png')}
            placeholder={'Conform Password'}
            errorMessage={conformPasswordError}
            showPassword={showConformPassword}
            setShowPassword={setShowConformPassword}
            isPassword={true}
          />
          <CustomButton title={'Submit'} onHandle={handleSubmit} />
          <CustomButton title={'Home'} onHandle={handleGoToHome} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
      {loader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={Colors.gray} />
        </View>
      )}
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
  },
  headingText: {
    alignSelf: 'center',
    color: Colors.white,
    fontSize: 30,
    marginBottom: hp('4%'),
    fontWeight: 'bold',
  },
  loaderContainer: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
  },
});
