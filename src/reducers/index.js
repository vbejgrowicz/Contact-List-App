import { combineReducers } from 'redux';
import contacts from './contacts';
import settings from './settings';

const contactApp = combineReducers({
  contacts,
  settings,
});

export default contactApp;
