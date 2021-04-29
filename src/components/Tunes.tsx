import React, { FC } from "react";
import {ITunes} from "../store/types";

interface TunesProps {
    data: ITunes;
}

const Tunes: FC<TunesProps> = ({data}) => {
    return (
        <section className='section'>
            <div className='container'>
                <h1 className='title has-text-centered'>{data.artistName}</h1>
            </div>
        </section>
    );
}

export default Tunes
