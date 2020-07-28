import { photos } from './api';

const INITIAL_STATE = {
    photos : photos,
    like: true
}
const photoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_LIKE': 
                return  {
                    ...state,
                    like:!state.like
                }

        default:
            return state;
    }
}

export default photoReducer;