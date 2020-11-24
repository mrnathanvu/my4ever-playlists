export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

const clientID = '47b31602f9094ad09bdfcacfe71af516';

const scopes = [
    // 'user-read-currently-playing',
    // 'user-read-recently-played',
    // 'user-read-playback-state',
    // 'user-top-read',
    // 'user-modify-playback-state',
    // 'user-read-private'
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scrope=${scopes.join('%20')}&response_type=token&show_dialog=true`;