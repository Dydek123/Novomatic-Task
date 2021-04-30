import {ThunkAction} from 'redux-thunk';
import {RootState} from "../index";
import {GET_ALBUM, GET_ARTIST, ITunes, ITunesData, ITunesError, SET_ERROR, SET_LOADING, TunesAction} from '../types';

const replaceStringToFetch = (text:string) :string =>  {
    return text.toLowerCase().replace(' ' , '+');
}

const getAlbumDetail = async (id: number) : Promise<number> => {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
    if (!res.ok) {
        const resData: ITunesError = await res.json();
        throw new Error(resData.message);
    }
    const resData: ITunes = await res.json();
    console.log(resData)
    if (resData.resultCount === 0){
        throw new Error('Album does not exist');
    }
    return resData.results[0].artistId;
}

export const getArtistDetails = (name: string): ThunkAction<void, RootState, null, TunesAction> => {
    return async dispatch => {
        try {
            const searchArtist:string = replaceStringToFetch(name);
            const requestStr = `https://itunes.apple.com/search?term=${searchArtist}&entity=album`
            console.log(requestStr)
            const res = await fetch(requestStr);
            if (!res.ok) {
                const resData: ITunesError = await res.json();
                throw new Error(resData.message);
            }
            const resData: ITunes = await res.json();
            dispatch({
                type: GET_ALBUM,
                payload: resData
            });
        }
        catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

export const getAlbumDetails = async (albumId: string): Promise<ITunes> => {
    const requestStr = `https://itunes.apple.com/lookup?id=${albumId}&entity=song`
    const res = await fetch(requestStr);
    if (!res.ok) {
        const resData: ITunesError = await res.json();
        throw new Error(resData.message);
    }
    try {
        const resData: ITunes = await res.json();
        return resData;
    }
    catch (e) {
        throw new Error('Fetch error');
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
