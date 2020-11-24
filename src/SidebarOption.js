import React from 'react';

import './SidebarOption.css';
import { useDataLayerValue } from './DataLayer';

function SidebarOption({ title, Icon, data }) {

    const [ state , dispatch] = useDataLayerValue();

    const playlistSelector = (id) => {
        // console.log('SIDEBAR PLAYLIST_ID: 👉', id)
        dispatch({
            type: 'SET_PLAYLIST_ID',
            playlistID: id
        })
    }

    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"/>} 
            {Icon ? <h4>{title}</h4> : <p onClick={() => {playlistSelector(data.id)}}>{data.name}</p>}
        </div>
    );
}

export default SidebarOption;
