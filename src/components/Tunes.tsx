import React, {FC} from "react";
import {ITunes} from "../store/types";
import AlbumList from "./AlbumList";


interface TunesProps {
    data: ITunes;
}


const Tunes: FC<TunesProps> = ({data}) => {
    return (
        <section className='section'>
            <div className='container is-flex-wrap-wrap tunes-container'>
                {data.results.map((object, i) => <AlbumList data={object}/>)}
            </div>
        </section>
    );
}

export default Tunes
