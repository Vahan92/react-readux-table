const initialState = '';

export default function filterTables(state=initialState,action){
    if(action.type === 'FIND'){
        return action.payload;
    }
        return state;    
}