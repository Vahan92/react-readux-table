const paging = (state={
    currentPage: 1,
    PerPage: 4
  },action) => {
    if(action.type === 'PAGE'){
        return {
            ...state,
            currentPage: action.payload
        }
    }
        return state;    
}

export default paging;