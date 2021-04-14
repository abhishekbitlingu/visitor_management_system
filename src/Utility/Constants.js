const Strings = {
  login_form_initial_value_email: 'abhishek.bitlingu@gmail.com',
  login_form_initial_value_password: 'asdfgf',
  login_form_error_min_characters: 'Min 8 characters required',
  login_form_place_holder_email: 'Enter email',
  login_form_place_holder_password: 'Enter password',
  login_form_forgot_password: 'Forgot Password',
  login_form_login_button: 'Login',
};

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
  app_color_orange: 'rgb(232,97,37)',
  app_color_dark_blue: 'rgb(45,190,250)',
  app_color_darker_blue: 'rgb(70,230,255)',
  app_color_green: 'rgb(49,192,81)',
};

export {Strings, NavigationRouteNames, AsyncStorageKeys, Colors, ErrorMessages};
