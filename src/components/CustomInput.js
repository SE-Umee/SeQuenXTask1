import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../assets/constant/colors';

const CustomInput = ({
  value,
  setValue,
  imagePath,
  placeholder,
  errorMessage,
  showPassword,
  setShowPassword,
  isPassword,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerInputView}>
        <Image
          source={imagePath}
          style={styles.iconImage}
          resizeMode="contain"
        />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={text => setValue(text)}
          placeholderTextColor={Colors.placeholderColor}
          style={styles.inputText}
          secureTextEntry={showPassword}
        />
        {isPassword ? (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword
                  ? require('../assets/icons/view-password-icon.png')
                  : require('../assets/icons/hide-password-icon.png')
              }
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  imagePath: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  showPassword: PropTypes.bool,
  setShowPassword: PropTypes.func,
  isPassword: PropTypes.bool,
};

export default CustomInput;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: hp(2),
    height: hp('11%'),
  },
  innerInputView: {
    borderWidth: wp('0.2%'),
    borderColor: Colors.borderColor,
    width: wp('90%'),
    borderRadius: wp('100%'),
    height: hp('7%'),
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: wp('5%'),
    justifyContent: 'flex-start',
  },
  inputText: {
    color: Colors.white,
    width: wp('60%'),
    fontSize: 20,
  },
  iconImage: {
    height: wp('7%'),
    width: wp('7%'),
    tintColor: Colors.placeholderColor,
    marginRight: wp('4%'),
  },
  errorText: {
    color: Colors.redColor,
    marginTop: hp('1%'),
    marginLeft: wp('12%'),
  },
});
