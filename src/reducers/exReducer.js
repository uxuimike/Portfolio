const initialState = {
    name: null,
    age: null
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'CHANGE_NAME':{
            state = {...state, name: action.playload};
            break;
        }
        case 'CHANGE_AGE':{
          state = {...state, name: action.playload};
          break;
        }
        default:
    }
    return state;
}
