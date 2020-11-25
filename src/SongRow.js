import React from 'react';

import './SongRow.css';
import { useDataLayerValue } from './DataLayer';

function SongRow({ data, index }) {

    const [ state , dispatch] = useDataLayerValue();

    const handlePlay = (previewUrl, index) => {
        console.log('SIDEBAR SONG_PREVIEW_URL: 👉', previewUrl)
        dispatch({
            type: 'SET_SONG_PREVIEW_URL',
            songPreviewUrl: previewUrl
        })

        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });

        console.log('SIDEBAR SONG_INDEX: 👉', index)
        dispatch({
            type: "SET_SONG_INDEX",
            songIndex: index
        });
    }

    return (
        <div className='songRow' onClick={() => {handlePlay(data.preview_url, index)}}>
            <img className='songRow__album' src={data.album.images[0].url} alt=''/>
            <div className="songRow__info">
                <h1>{data.name}</h1>
                <p>
                    {data.artists.map((item) => item.name).join(', ')} -{' '}{data.album.name}
                </p>
            </div>            
        </div>
    );
}

export default SongRow;
