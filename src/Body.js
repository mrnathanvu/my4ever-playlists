import React from 'react';

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ discover_weekly }] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} atl=''/>
                <div className="body__infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className='body__shuffle'/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;
