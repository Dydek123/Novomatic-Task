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
            <form className="py-5" onSubmit={submitHandler}>
                <input
                    type="text"
                    className={styles.containterInput}
                    placeholder="Enter artist name"
                    value={artist}
                    onChange={changeHandler}
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default Search;
