import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  // Short-term memory store
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    console.log('TOKEN: 👉', _token);

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log('USER: 👉', user);
      })
    }

  }, []);

  return (
    // BEM
    <div className="app">
      {
        token ? (
          // <Player />
          <h1>PLAYER PAGE</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
