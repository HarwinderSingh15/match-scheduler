import {combineReducers} from '@reduxjs/toolkit';
import authSlicer from '../slices/authSlicer';
import MatchesSlicer from '../slices/MatchesSlicer';

const rootReducer = combineReducers({
  auth: authSlicer,
  matches: MatchesSlicer,
});

export default rootReducer;
