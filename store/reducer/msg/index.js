const initialState = {
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREASE': return {data: action.response};
        case 'DECREASE': return {data: action.response};
        default: return state;
      }
}

export default reducer