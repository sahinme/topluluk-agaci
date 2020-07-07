import { GET_USER_COMMUNITIES_REQUEST, GET_USER_COMMUNITIES_SUCCESS, GET_USER_COMMUNITIES_FAILURE } from './actions';

const initialState = {
    data: null,
    error: null,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_USER_COMMUNITIES_REQUEST:
            console.log('reduxeer')
            return { ...state, error: '' };
        case GET_USER_COMMUNITIES_SUCCESS:
            return { ...state, data: payload };
        case GET_USER_COMMUNITIES_FAILURE:
            return { ...state, error: payload };
        default:
            return state;
    }
}
