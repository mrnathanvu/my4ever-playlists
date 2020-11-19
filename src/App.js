import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

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
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log('USER: 👉', user);
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }

    // console.log('TOKEN: 👉', _token);
  }, []);

  // console.log('USER: 👉👉', user);
  // console.log('TOKEN: 👉👉', token);

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
