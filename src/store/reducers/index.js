import { combineReducers } from 'redux';
import views from './viewsReducer';

export const rootReducer = combineReducers({
  views,
});
