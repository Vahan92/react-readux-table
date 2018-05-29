const fetching = (state={
    users:[],
    fetching:false,
    fetched:false,
    error:null
}, action) => {
    switch(action.type){
        case "FETCH_USERS":{
            return {...state, fetching: true}
        };
        break;

        case "FETCH_USERS_FULFILLED":{
            return {...state, fetching: false, fetched: true, users: action.payload}
        };
        break;

        case "FETCH_USERS_REJECTED":{
            return {...state, fetching: false, error: action.payload}
        };
    }
    return state;
};
export default fetching;