import React from 'react';

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ playlists }] = useDataLayerValue();

    console.log('BODY playlists: 👉', playlists)

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={playlists?.images[0].url} atl=''/>
                <div className="body__infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>{playlists?.name}</h2>
                    <p>{playlists?.owner.display_name} • <span>{playlists?.tracks.items.length} songs</span></p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className='body__shuffle'/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>
                {playlists?.tracks.items.map((item, _i) => (
                    <SongRow track={item.track} index={_i}/>
                ))}
            </div>
        </div>
    );
}

export default Body;
