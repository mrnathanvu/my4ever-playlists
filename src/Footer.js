import React, { useState } from 'react';
import { Grid, Slider } from "@material-ui/core";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

import './Footer.css';
import { useDataLayerValue } from './DataLayer';

function Footer() {

    const [{ playing, arrOfSongs, songIndex, shuffle, trackInfo }, dispatch] = useDataLayerValue();
    const [volumeValue, setVolumeValue] = useState(30);

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

    const handleSkipNext = () => {
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
    };

    const handleSkipPrevious = () => {
        if (songIndex === 0) {
            dispatch({
                type: "SET_PLAYING",
                playing: false
            });
        } else {
            dispatch({
                type: "SET_SONG_PREVIEW_URL",
                songPreviewUrl: arrOfSongs[songIndex - 1].track.preview_url
            });

            dispatch({
                type: "SET_SONG_INDEX",
                songIndex: songIndex - 1
            });
        }
    };

    const handleShuffle = () => {
        if (shuffle) {
            dispatch({
                type: "SET_SHUFFLE",
                shuffle: false,
            });
        } else {
            const randomIndex = Math.floor(Math.random() * arrOfSongs.length)
            dispatch({
                type: "SET_SONG_PREVIEW_URL",
                songPreviewUrl: arrOfSongs[randomIndex].track.preview_url
            });

            dispatch({
                type: "SET_SONG_INDEX",
                songIndex: randomIndex
            });

            dispatch({
                type: "SET_SHUFFLE",
                shuffle: true,
            });
        }
    };

    const handleVolume = (event, value) => {
        setVolumeValue(value);
        dispatch({
            type: 'SET_VOLUME',
            volume: value / 100
        })
    };

    return (
        <div className='footer'>
            <div className="footer__left">
                <img
                    className="footer__albumLogo" 
                    src={trackInfo?.album.images[0].url}
                    alt='' 
                />
                {playing ? (
                    <div className="footer__songInfo">
                        <h4>{trackInfo?.name}</h4>
                        <p>{trackInfo?.artists.map((data) => data.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="footer__songInfo">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
            </div> 

            <div className="footer__center">
                {shuffle ? (
                    <ShuffleIcon
                        onClick={handleShuffle}
                        className="footer__green"
                    />
                ) : (
                    <ShuffleIcon
                        onClick={handleShuffle}
                    />
                )}
                <SkipPreviousIcon onClick={handleSkipPrevious} className='footer__icon' />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                ) : (
                    <PlayCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                )}
                <SkipNextIcon onClick={handleSkipNext} className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div> 

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" value={volumeValue} onChange={handleVolume} />
                    </Grid>
                </Grid>
            </div> 
        </div>
    );
}

export default Footer;
