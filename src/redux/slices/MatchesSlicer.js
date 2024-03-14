import {MATCHES} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {login} from '../actions/authActions';
import {getMatchesList} from '../actions/MatchesActions';

const initialState = {
  loading: false,
  allMatches: {},
  error: {},
};

const matchesSlice = createSlice({
  name: MATCHES,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMatchesList.pending, state => {
        state.loading = true;
      })
      .addCase(getMatchesList.fulfilled, (state, action) => {
        state.loading = false;
        state.allMatches = action.payload;
      })
      .addCase(getMatchesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default matchesSlice.reducer;
