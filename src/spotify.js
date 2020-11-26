export const authEndpoint = 'https://accounts.spotify.com/authorize';

// const redirectUri = 'http://localhost:5000/';
const redirectUri = 'https://spotify-clone-360ff.web.app';

const clientId = '47b31602f9094ad09bdfcacfe71af516';

const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
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

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;