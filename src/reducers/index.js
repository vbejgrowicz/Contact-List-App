import { combineReducers } from 'redux';
import contacts from './contacts';
import visibilityFilter from './visibilityFilter';

const contactApp = combineReducers({
  contacts,
  visibilityFilter,
});

export default contactApp;
