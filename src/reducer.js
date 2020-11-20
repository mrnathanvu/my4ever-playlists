export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQB6GkIXJtfQ9g_3VeFDlT_JFIAE56wZ1NHMO3b3qm163kCn2ilMJNrq-maybH6t744qEQL0pcc2_3GSu4rjfjeWd8XMVZykPDp13LB8ck1Zh_sRjjVb7XmUrZZUfzQ_v74rNC_UlNNTNOpt',
};

// Its job just sit there and listen for an action
const reducer = (state, action) => {
    // console.log('ACTION: 👉', action);
    
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
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;