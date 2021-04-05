import { createStore, combineReducers } from 'redux';
import NavigationReducer from './reducers/NavigationReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  form: formReducer,
});

export default createStore(rootReducer);