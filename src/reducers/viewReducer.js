const initialState = {
    device: "mobile",
    orientation: "portrait",
    width: 960,
    height: 1080
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'CHANGE_SIZE':{
            console.log("Change Size!", action.payload);
            state = {...state, width: action.payload.width, height: action.payload.height};
            break;
        }
        case 'CHANGE_ORIENTATION':{
          state = {...state, name: action.playload};
          break;
        }
        default:
    }
    return state;
}
