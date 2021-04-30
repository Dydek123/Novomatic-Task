import {ITunesData} from "../store/types";
import React, {FC, FormEvent, useState} from "react";

import { useDispatch, useSelector } from "react-redux";

import {RootState } from "../store";
import Search from "../components/Search";
import Alert from "../components/Alert";
import Tunes from "../components/Tunes";
import { setAlert } from "../store/actions/alertActions";
import {getAlbumDetails, getArtistDetails, setError, setLoading} from "../store/actions/tunesActions";

interface AlbumProps {
    data: ITunesData;
}

const Album: FC<AlbumProps> = ({data}) => {
    const submitHandler = async (e: FormEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        let songsData;
        try{
            songsData = await getAlbumDetails(e.currentTarget.value);
            console.log(songsData)
            // @ts-ignore
            button.parentNode.lastChild.innerHTML = '';
            if (button.innerText === 'Hide'){
                button.innerText='Show more';
                return
            }
            for (const song of songsData.results) {
                if (song.trackName !== undefined) {
                    let songName = document.createElement("p");
                    songName.className = "mt-2";
                    songName.innerText = song.trackName
                    // @ts-ignore
                    button.parentNode.lastChild.append(songName)
                }
            }
            button.innerText = 'Hide';
        }
        catch (e) {
            return null;
        }
    }

    return (
        <div className='box mb-6'>
            <div className='box-content'>
                <div className='has-text-centered'>
                    <h3 className='title has-text-centered'>{data.collectionName}</h3>
                    <p className='mb-2'>{data.artistName}</p>
                </div>
                <button className='button is-primary' value={data.collectionId} onClick={submitHandler}>Show more</button>
                <div></div>
            </div>
        </div>
    )
}

export default Album;
