import { photos } from './api';
const INITIAL_STATE = {
    photos : photos
}
const photoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALL_PHOTOS':
                return {
                    ...state,
                    photos: action.payload
                }
        default:
            return state;
    }
}

export default photoReducer;