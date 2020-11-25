export const initialState = {
    // token: 'BQB6GkIXJtfQ9g_3VeFDlT_JFIAE56wZ1NHMO3b3qm163kCn2ilMJNrq-maybH6t744qEQL0pcc2_3GSu4rjfjeWd8XMVZykPDp13LB8ck1Zh_sRjjVb7XmUrZZUfzQ_v74rNC_UlNNTNOpt',
    user: null,
    userPlaylists: null,
    playlists: null,
    playlistID: null,
    songPreviewUrl: null,
    playing: false,
    arrOfSongs: [],
    songIndex: null,
    shuffle: false,
    volume: 0.3,
    trackInfo: null,
};

// Its job just sit there and listen for an action
const reducer = (state, action) => {
    // console.log('ACTION: 👉', action);
    
    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_USER_PLAYLISTS':
            return {
                ...state,
                userPlaylists: action.userPlaylists,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_PLAYLIST_ID':
            return {
                ...state,
                playlistID: action.playlistID,
            };
        case 'SET_SONG_PREVIEW_URL':
            return {
                ...state,
                songPreviewUrl: action.songPreviewUrl,
            };
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            };
        case 'SET_ARRAY_OF_SONGS':
            return {
                ...state,
                arrOfSongs: action.arrOfSongs,
            };
        case 'SET_SONG_INDEX':
            return {
                ...state,
                songIndex: action.songIndex,
            };
        case 'SET_SHUFFLE':
            return {
                ...state,
                shuffle: action.shuffle,
            };
        case 'SET_VOLUME':
            return {
                ...state,
                volume: action.volume,
            };
        case 'SET_TRACK_FULL_INFO':
            return {
                ...state,
                trackInfo: action.trackInfo,
            };
        default:
            return state;
    }
};

export default reducer;