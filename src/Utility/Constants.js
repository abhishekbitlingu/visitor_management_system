const Strings = {};

const NavigationRouteNames = {
  StackNavigator: {
    Login: 'Login',
    Enrollment: 'Enrollment',
    DashboardHome: 'DashboardHome',
  },
  // BottomTabNavigator: {
  //   Home: 'Home',
  //   Hot_Offer: 'Hot Offer',
  //   My_cart: 'My cart',
  //   Search: 'Search',
  //   Profile: 'Profile',
  // },
  HomeStackNavigator: {
    Dashboard: 'Dashboard',
    ProductListing: 'ProductListing',
    Details_Screen: 'Details Screen',
  },
};

const AsyncStorageKeys = {
  role: 'role',
  auth_token: 'authtoken',
};

const ErrorMessages = {
  no_working_internet: 'No Working internet connection found!!',
};

const Colors = {
  app_color_blue: 'rgb(29,173,233)',
  app_color_dark_blue: 'rgb(45,190,250)',
  app_color_darker_blue: 'rgb(70,230,255)',
  app_color_green: 'rgb(49,192,81)',
};

export {Strings, NavigationRouteNames, AsyncStorageKeys, Colors, ErrorMessages};
