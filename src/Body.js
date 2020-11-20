import React from 'react';

import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';

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
        </div>
    );
}

export default Body;
