import {GET_ARTIST, ITunesState, SET_LOADING, TunesAction} from "../types";

const initialState : ITunesState= {
    data: null,
    loading: false,
    error: ''
}

export default (state = initialState, action: TunesAction): ITunesState => {
    switch (action.type) {
        case GET_ARTIST:
            return {
                data: action.payload,
                loading: false,
                error: '',
            }
        case "GET_ALBUM":
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}
