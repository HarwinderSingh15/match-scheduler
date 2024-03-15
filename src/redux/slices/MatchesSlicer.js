import {MATCHES} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {
  ViewMatchDetails,
  addMatch,
  getMatchesList,
} from '../actions/MatchesActions';

const initialState = {
  loading: false,
  allMatches: {},
  error: {},
  allSchedules: [],
  viewSingleSchedule: {},
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
      })

      .addCase(addMatch.fulfilled, (s, a) => {
        s.allSchedules = [...s.allSchedules, a.payload];
      })

      .addCase(ViewMatchDetails.fulfilled, (s, a) => {
        s.viewSingleSchedule = a.payload;
      });
  },
});

export default matchesSlice.reducer;
