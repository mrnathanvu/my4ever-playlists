import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ token, playlistID }, dispatch] = useDataLayerValue();

  // console.log('APP PLAYLIST ID: 👉', playlistID)

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    // console.log('TOKEN: 👉', _token);

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe()
        .then((me) => {
          console.log('APP getMe: 👉', me);
          dispatch({
            type: 'SET_USER',
            user: me
          });
        });

      spotify.getUserPlaylists()
        .then((userPlaylist) => {
          console.log('APP getUserPlaylists: 👉', userPlaylist.items);
          dispatch({
            type: 'SET_USER_PLAYLISTS',
            userPlaylists: userPlaylist.items
          })
          
          console.log('APP getUserPlaylists_id: 👉', userPlaylist.items[0].id);
          dispatch({
            type: 'SET_PLAYLIST_ID',
            playlistID: userPlaylist.items[0].id
          })
        });

      // spotify.getPlaylist(playlistID)
      //   .then((playlist) => {
      //     console.log('App getPlaylist: 👉', playlist);
      //     dispatch({
      //       type: 'SET_PLAYLISTS',
      //       playlists: playlist,
      //     });
      //   });


  

    }
  }, []);

  useEffect(() => {

    spotify.getPlaylist(playlistID)
        .then((playlist) => {
          console.log('App getPlaylist: 👉', playlist);
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlist,
          });
        });

  },[playlistID])

  return (
    // BEM
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
