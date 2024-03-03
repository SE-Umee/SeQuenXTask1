import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../assets/constant/colors';
import {useSelector} from 'react-redux';
import {getUsers} from '../services/requests';

const HomeScreen = () => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.user);
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      const response = await getUsers();
      if (response.ok) {
        const data = await response.json();
        setLoader(false);
        setUsers(data);
      } else {
        console.log('fetching user data Error');
        setLoader(false);
      }
    };
    getUsersData();
  }, []);

  console.log('users', users);

  console.log('userData', userData);
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/back-icon.png')}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View>
          {users.length > 0 ? (
            <FlatList
              data={users}
              renderItem={({item}) => (
                <View style={styles.userDataContainer}>
                  <Text style={styles.userDataText}>{item.name}</Text>
                  <Text style={styles.userDataText}>{item.email}</Text>
                </View>
              )}
            />
          ) : (
            <View>
              <Text style={styles.headingText}>No user found</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
      {loader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={Colors.gray} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingLeft: wp('2%'),
  },
  backButton: {
    height: wp('13%'),
    width: wp('13%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    height: wp('9%'),
    width: wp('9%'),
    tintColor: Colors.white,
    marginRight: wp('4%'),
  },
  loaderContainer: {
    height: hp('100%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    alignSelf: 'center',
    color: Colors.white,
    fontSize: 30,
    marginBottom: hp('4%'),
    fontWeight: 'bold',
  },
  userDataContainer: {
    borderWidth: wp('0.2%'),
    borderColor: Colors.borderColor,
    width: wp('90%'),
    borderRadius: wp('100%'),
    height: hp('7%'),
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: wp('5%'),
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  userDataText: {
    color: Colors.gray,
    fontSize: 18,
  },
});
