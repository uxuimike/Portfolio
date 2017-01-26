const initialState = {
    device: "mobile",
    orientation: "portrait",
    width: 960,
    height: 1080,
    scroll: 0,
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'CHANGE_SIZE':{
            state = {...state, width: action.payload.width, height: action.payload.height};
            break;
        }
        case 'CHANGE_SCROLL':{
          state = {...state, scroll: action.payload.scrollTop};
          break;
        }
        default:
    }
    return state;
}
