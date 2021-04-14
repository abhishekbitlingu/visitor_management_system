import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';
import {Container, Header} from 'native-base';
import React, {Component} from 'react';
import {Image, StatusBar, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AppUtilities from './../../../Utility/AppUtilities';
import LoginForm from './../../forms/LoginForm';
// import {hideHUDLoading, showHUDLoading} from './../../custom/UniversalLoader';
import {
  AsyncStorageKeys,
  ErrorMessages,
  NavigationRouteNames,
  Strings,
} from './../../../Utility/Constants';
import {setNavigatorRoutesForPreLoggedInUser} from '../../../redux/actions/NavigationActions';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  setNavigatorRoutesForPreLoggedInUser: authToken =>
    dispatch(setNavigatorRoutesForPreLoggedInUser(authToken)),
});

class Login extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    this.checkAndNavigateToHomePage();
  }
  render() {
    return (
      <Container>
        <Header transparent style={styles.header}>
          <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        </Header>
        <Image
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          source={{uri: Platform.OS == 'android' ? 'ic_launcher' : 'AppIcon'}}
        />
        <LoginForm
          onSubmit={this.validateUser}
          initialValues={{
            email: Strings.login_form_initial_value_email,
            password: Strings.login_form_initial_value_password,
          }}
        />
      </Container>
    );
  }

  validateUser = values => {
    const userCredentials = {
      email: values.email.toLowerCase(),
      password: values.password,
    };
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        // make an API call
        // this.props.signInUser(userCredentials);
      } else {
        AppUtilities.showAlert(ErrorMessages.no_working_internet);
      }
    });
  };

  checkAndNavigateToHomePage() {
    // if (!this.props.isLoading) {
    //   // hideHUDLoading();
    //   if (this.props.userData != null) {
    //     AsyncStorage.setItem(
    //       AsyncStorageKeys.auth_token,
    //       this.props.userData.authtoken,
    //     ).then(() => {
    //       this.props.setNavigatorRoutesForPreLoggedInUser(
    //         this.props.userData.authtoken,
    //       );
    //     });
    //   } else if (this.props.error != null) {
    //     AppUtilities.showAlert(this.props.error);
    //   }
    // } else {
    //   // showHUDLoading();
    //   if (this.props.credentials != null || this.props.userData != null) {
    //     // show loader
    //   }
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(null, mapDispatchToProps)(Login);
