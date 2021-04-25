import reposReducer from '../actions/reposActions'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    repos: reposReducer
});

export default allReducers;