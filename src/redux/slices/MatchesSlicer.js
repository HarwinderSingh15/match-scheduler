import {MATCHES} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {
  ViewMatchDetails,
  addMatch,
  getSchedulesList,
} from '../actions/MatchesActions';

const initialState = {
  loading: false,
  error: {},
  addSchedules: {},
  allSchedules: [],
  viewSingleSchedule: {},
};

const matchesSlice = createSlice({
  name: MATCHES,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSchedulesList.pending, state => {
        state.loading = true;
      })
      .addCase(getSchedulesList.fulfilled, (state, action) => {
        state.loading = false;
        state.allSchedules = action.payload;
      })
      .addCase(getSchedulesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addMatch.fulfilled, (s, a) => {
        s.addSchedules = {...a.payload};
      })

      .addCase(ViewMatchDetails.fulfilled, (s, a) => {
        s.viewSingleSchedule = a.payload;
      });
  },
});

export default matchesSlice.reducer;
