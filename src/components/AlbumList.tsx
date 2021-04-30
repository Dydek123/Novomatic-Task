import {ITunesData} from "../store/types";
import React, {FC} from "react";

interface AlbumProps {
    data: ITunesData;
}

const Album: FC<AlbumProps> = ({data}) => {
    return (
        <div className='box mb-6'>
            <div className='box-content'>
                <h3 className='title has-text-centered'>{data.collectionName}</h3>
                <div className='has-text-centered'>
                    <p className='mb-2'>{data.artistName} <img src='note.svg' alt='melody'
                                                               className='box-melody'/></p>
                    <button className='button is-primary'>Show more</button>
                </div>
            </div>
        </div>
    )
}

export default Album;
