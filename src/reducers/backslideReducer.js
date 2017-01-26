const initialState = {
    duration: 0.6,
    inAnimation: 'none',
    outAnimation: 'none',
    inEase: 'linear',
    outEase: 'linear',
    backgroundColor: 'rgb(255, 255, 255)',
    bgImg: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'CHANGE_BG':{
          state = Object.assign({}, state, action.payload.slideStyle);
          break;
        }
        default:
    }
    return state;
}
