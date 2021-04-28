import {ThunkAction} from 'redux-thunk';
import {RootState} from "../index";
import {GET_ARTIST, ITunes, ITunesError, SET_ERROR, SET_LOADING, TunesAction} from '../types';

export const getArtistDetails = (name: string): ThunkAction<void, RootState, null, TunesAction> => {
    return async dispatch => {
        try {
            const searchArtist:string = name.toLowerCase().replace(' ' , '+');
            const res = await fetch(`https://itunes.apple.com/search?term=${searchArtist}`);

            if (!res.ok) {
                const resData: ITunesError = await res.json();
                throw new Error(resData.message);
            }

            const resData: ITunes = await res.json();
            dispatch({
                type: GET_ARTIST,
                payload: resData
            })
        }
        catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const getAlbumDetails = (albumName: string): ThunkAction<void, RootState, null, TunesAction> => {
    return async dispatch => {
        try {
            //TODO fetch data
        }
        catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const setLoading = (): TunesAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): TunesAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}
