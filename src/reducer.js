export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: '',
};

// Its job just sit there and listen for an action
const reducer = (state, action) => {
    console.log('ACTION: 👉', action);
    
    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
};

export default reducer;