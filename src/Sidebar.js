import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

    const [{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img 
                className="sidebar__logo" 
                src={process.env.PUBLIC_URL + '/spotify2019-830x350.jpg'} 
                alt='' 
            />
            <SidebarOption Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={SearchIcon} title='Search' />
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />

            <br/>
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar;
