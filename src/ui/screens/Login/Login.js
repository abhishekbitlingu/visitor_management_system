import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';
import {Text, View} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  AsyncStorageKeys,
  NavigationRouteNames,
} from './../../../Utility/Constants';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Login screen</Text>
      </View>
    );
  }

  navigateToCustomerRegistration() {
    AsyncStorage.setItem(AsyncStorageKeys.intro_screen_visited, 'true').then(
      () => {
        this.props.navigation.dispatch(
          StackActions.replace(
            NavigationRouteNames.RootStackNavigator.CustomerRegistration,
          ),
        );
      },
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
