import {ITunesData} from "../store/types";
import React, {FC, FormEvent} from "react";
import {getAlbumDetails} from "../store/actions/tunesActions";

interface AlbumProps {
    data: ITunesData;
}

const Album: FC<AlbumProps> = ({data}) => {
    const submitHandler = async (e: FormEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        let songsData;
        try {
            songsData = await getAlbumDetails(e.currentTarget.value);
            // @ts-ignore
            button.parentNode.lastChild.innerHTML = '';
            if (button.innerText === 'Hide') {
                // @ts-ignore
                button.parentNode.removeChild(button.parentNode.lastChild)
                button.innerText = 'Show more';
                return
            }
            let container = document.createElement('div');
            for (const song of songsData.results) {
                if (song.trackName !== undefined) {

                    let songName = document.createElement("p");
                    songName.className = "mt-1";
                    songName.innerHTML = `${song.trackName} (${song.trackPrice}$)
                        <a href="${song.trackViewUrl}" target="_blank">
                            <img src='note.svg' alt='melody' class='box-melody'/> 
                        </a>
                        `;
                    container.appendChild(songName)
                }
            }
            // @ts-ignore
            button.parentNode.append(container);
            button.innerText = 'Hide';
        } catch (e) {
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
                <button className='button is-primary' value={data.collectionId} onClick={submitHandler}>Show more
                </button>
            </div>
        </div>
    )
}

export default Album;
