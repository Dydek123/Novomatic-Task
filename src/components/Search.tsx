import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";

import { setAlert } from "../store/actions/alertActions";
import { setLoading, getArtistDetails } from "../store/actions/tunesActions";
import styles from './stylesheets/Search.module.css';

interface SearchProps {
    title: string,
}

const Search: FC<SearchProps> = ({title}) => {
    const dispatch = useDispatch();
    const [artist, setArtist] = useState('');
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setArtist(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(artist.trim() === '') {
            return dispatch(setAlert('Artist name is required'));
        }

        dispatch(setLoading());
        dispatch(getArtistDetails(artist));
        setArtist('');
    }

    return(
        <div className={styles.searchContainer}>
            <form className="py-5 " onSubmit={submitHandler}>
                <input
                    type="text"
                    className='input mb-2'
                    placeholder="Enter artist or album"
                    value={artist}
                    style={{width:'40%', borderRadius:'4px 0 0 4px'}}
                    onChange={changeHandler}
                />
                <button
                    className='button is-primary'
                    style={{borderRadius:'0 4px 4px 0'}}
                >Search</button>
            </form>
        </div>
    );
}

export default Search;
