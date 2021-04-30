import React, {FC} from "react";
import {ITunes, ITunesData} from "../store/types";

interface TunesProps {
    data: ITunes;
}

interface AlbumProps {
    data: ITunesData;
}

const Album: FC<AlbumProps> = ({data}) => {
    return (
        <div className='box mb-6'>
            <div className='box-content'>
                <h3 className='title has-text-centered'>{data.collectionName}</h3>
                <div className='has-text-centered'>
                    <p className='mb-2'>{data.artistName} </p>
                    <button className='button is-primary'>Show more<img src='note.svg' alt='melody'
                                                                        className='box-melody'/></button>
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
