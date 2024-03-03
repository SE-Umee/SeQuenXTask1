import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../assets/constant/colors';

const CustomButton = ({title, onHandle}) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={() => onHandle()}>
      <Text style={styles.submitBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  submitBtn: {
    borderWidth: wp('0.2%'),
    borderColor: Colors.borderColor,
    width: wp('90%'),
    marginTop: hp('4%'),
    borderRadius: wp('100%'),
    height: hp('7%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.borderColor,
  },
  submitBtnText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});
