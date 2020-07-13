import { combineReducers } from 'redux';

import photoReducer from '../redux/photos/photo.reducer';

export default combineReducers({
    photo : photoReducer
});

