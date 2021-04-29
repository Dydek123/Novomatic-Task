export const GET_ALBUM = 'GET_ALBUM';
export const GET_ARTIST = 'GET_ARTIST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

type address = number;

export interface ITunes {
    "wrapperType": string,
    "kind": string,
    "artistId": number,
    "collectionId": number,
    "trackId": number,
    "artistName": string,
    "collectionName": string,
    "trackName": string,
    "collectionCensoredName": string,
    "trackCensoredName": string,
    "artistViewUrl": address,
    "collectionViewUrl": address,
    "trackViewUrl": address,
    "previewUrl": address,
    "artworkUrl60": address,
    "artworkUrl100": address,
    "collectionPrice": number,
    "trackPrice": number,
    "collectionExplicitness": string,
    "trackExplicitness": string,
    "discCount": number,
    "discNumber": number,
    "trackCount": number,
    "trackNumber": number,
    "trackTimeMillis": number,
    "country": string,
    "currency": string,
    "primaryGenreName": string,
}

export interface ITunesData {
    resultCount: number,
    results: ITunes[]
}

export interface ITunesError {
    cod: string,
    message: string
}

export interface ITunesState {
    data: ITunes | null,
    loading: boolean,
    error: string,
}

interface IGetAlbumAction {
    type: typeof GET_ALBUM,
    payload: ITunes
}

interface IGetArtistAction {
    type: typeof GET_ARTIST,
    payload: ITunes
}

interface ISetLoadingAction {
    type: typeof SET_LOADING,
}

interface ISetErrorAction {
    type: typeof SET_ERROR,
    payload: string
}

export type TunesAction = IGetAlbumAction | IGetArtistAction | ISetLoadingAction | ISetErrorAction;

export interface IAlertAction {
    type: typeof SET_ALERT,
    payload: string
}

export interface IAlertState {
    message: string
}
