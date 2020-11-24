import React from 'react';

import './SongRow.css';
import { useDataLayerValue } from './DataLayer';

function SongRow({ data }) {

    const [ state , dispatch] = useDataLayerValue();

    const songSelector = (id) => {
        console.log('SIDEBAR SONG_PREVIEW_URL: 👉', id)
        dispatch({
            type: 'SET_SONG_PREVIEW_URL',
            songPreviewUrl: id
        })
    }

    return (
        <div className='songRow' onClick={() => {songSelector(data.preview_url)}}>
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
