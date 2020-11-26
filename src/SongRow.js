import React from 'react';

import './SongRow.css';
import { useDataLayerValue } from './DataLayer';

function SongRow({ data, index }) {

    const [ state , dispatch] = useDataLayerValue();

    const handlePlay = (track, index) => {
        if (track.preview_url) {
            dispatch({
                type: 'SET_SONG_PREVIEW_URL',
                songPreviewUrl: track.preview_url
            })
    
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
    
            dispatch({
                type: "SET_SONG_INDEX",
                songIndex: index
            });
    
            dispatch({
                type: "SET_TRACK_FULL_INFO",
                trackInfo: track
            });
        } else {
            alert("NO SONG PREVIEW PROVIDED.\nPLEASE CHOOSE ANOTHER SONG.\nTHANK YOU! ♥️");
        }
        
    }

    return (
        <div className='songRow' onClick={() => {handlePlay(data, index)}}>
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
