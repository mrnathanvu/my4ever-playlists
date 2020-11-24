import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch] = useDataLayerValue();

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

      spotify.getMe().then((user) => {
        console.log('APP getMe: 👉', user);
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists()
        .then((userPlaylist) => {
          console.log('APP getUserPlaylists: 👉', userPlaylist.items);
          dispatch({
            type: 'SET_USER_PLAYLISTS',
            userPlaylists: userPlaylist.items
          })

          spotify.getPlaylist(userPlaylist.items[0].id)
            .then((playlist) => {
              console.log('App getPlaylist: 👉', playlist);
              dispatch({
                type: 'SET_PLAYLISTS',
                playlists: playlist,
              });
            });

        });

  

    }
  }, []);

  return (
    // BEM
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
