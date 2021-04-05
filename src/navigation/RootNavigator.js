import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import {setNavigatorRoutesForPreLoggedInUser} from '../redux/actions/NavigationActions';
import {AsyncStorageKeys, NavigationRouteNames} from '../Utility/Constants';
import Login from '../ui/screens/Login/Login';

const mapStateToProps = state => ({
  isLoading: state.navigation.isLoading,
  isSignout: state.navigation.isSignout,
  userToken: state.navigation.userToken,
});

const Stack = createStackNavigator();

const RootNavigator = props => {
  console.log('token not found');
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let authToken;
      try {
        authToken = await AsyncStorage.getItem(AsyncStorageKeys.auth_token);
      } catch (e) {
        console.log('token not found', e);
      }
      props.setNavigatorRoutesForPreLoggedInUser(authToken);
    };
    bootstrapAsync();
  }, []);

  console.log('props.isLoading = ' + props.isLoading);
  if (!props.isLoading) {
    setTimeout(
      () => {
        SplashScreen.hide();
      },
      Platform.OS == 'android' ? 2000 : 500,
    );
  }

  return (
    <NavigationContainer>
      {props.userToken != null && props.userToken != undefined ? (
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            animationTypeForReplace: 'push',
          }}>
          <Stack.Screen
            name={NavigationRouteNames.StackNavigator.Login}
            component={Login}
            options={{
              header: () => null,
              gestureEnabled: false,
              animationTypeForReplace: 'push',
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            animationTypeForReplace: 'push',
          }}>
          <Stack.Screen
            name={NavigationRouteNames.StackNavigator.Login}
            component={Login}
            options={{
              header: () => null,
              gestureEnabled: false,
              animationTypeForReplace: 'push',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  setNavigatorRoutesForPreLoggedInUser: authToken =>
    dispatch(setNavigatorRoutesForPreLoggedInUser(authToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
