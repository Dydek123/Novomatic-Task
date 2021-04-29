import React, { FC } from "react";
import {ITunes, ITunesData} from "../store/types";

interface TunesProps {
    data: ITunes;
}

interface AlbumProps {
    data: ITunesData;
}

const Album: FC<AlbumProps> = ({data}) => {
    return(
        <div className='box'>
            <div className='box-content'>
                <h2 className='title has-text-centered'>{data.collectionName}</h2>
                <div className='has-text-centered'>
                    <p>{data.artistName}</p>
                    <button className='button is-primary'>Show more</button>
                </div>
            </div>
        </div>
    )
}

const Tunes: FC<TunesProps> = ({data}) => {
    return (
        <section className='section'>
            <div className='container is-flex-wrap-wrap tunes-container'>
                {data.results.map((object, i) => <Album data={object}/>)}
            </div>
        </section>
    );
}

export default Tunes
