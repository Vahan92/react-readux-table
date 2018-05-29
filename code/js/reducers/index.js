import {combineReducers} from 'redux';
import fetching from './asyncReducers';
import filterTables from './filter-for-table';
import paging from './pagination';

const allReducers = combineReducers({
    fetching,
    filterTables,
    paging    
})

export default allReducers;