import React, { useEffect, useRef } from 'react';

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';

function Body() {

    const [{ playlists, songPreviewUrl, playing, arrOfSongs, songIndex, shuffle, volume }, dispatch] = useDataLayerValue();

    const audio = useRef();


    useEffect(() => {
        
        playing ? audio.current.play() : audio.current.pause();
        
        audio.current.volume = volume;

    }, [playing, songPreviewUrl, volume])


    const handlePlayPause = () => {
        if (playing) {
            dispatch({
                type: "SET_PLAYING",
                playing: false
            });
        } else {
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };


    const generateRandomNumber = () => {
        var randomNumber = Math.floor(Math.random() * arrOfSongs.length);

        if (songIndex === randomNumber) {
            return generateRandomNumber();
        } else {
            return randomNumber;
        }
    }

    const handleEnded = () => {
        if (shuffle) {
            var randomIndex = generateRandomNumber();

            dispatch({
                type: "SET_SONG_PREVIEW_URL",
                songPreviewUrl: arrOfSongs[randomIndex].track.preview_url
            });

            dispatch({
                type: "SET_SONG_INDEX",
                songIndex: randomIndex
            });
        } else {
            if (songIndex === arrOfSongs.length - 1) {
                dispatch({
                    type: "SET_PLAYING",
                    playing: false
                });
            } else {
                dispatch({
                    type: "SET_SONG_PREVIEW_URL",
                    songPreviewUrl: arrOfSongs[songIndex + 1].track.preview_url
                });
                
                dispatch({
                    type: "SET_SONG_INDEX",
                    songIndex: songIndex + 1
                });
            }
        }
    }

    return (
        <div className="body">
            <Header />

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
                {playing ? (
                    <PauseCircleFilledIcon
                        className="body__shuffle"
                        onClick={handlePlayPause}
                    />
                ) : (
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick={handlePlayPause}
                    />
                )}
                <FavoriteIcon fontSize='large'/>
                <MoreHorizIcon />
                </div>
                {playlists?.tracks.items.map((data, _i) => (
                    <SongRow data={data.track} index={_i} />
                ))}
            </div>

            <audio
                ref={audio}
                src={songPreviewUrl}
                preload='true'
                onEnded={handleEnded}
            />
        </div>
    );
}

export default Body;
