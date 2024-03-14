import {MATCHES_LIST} from '../types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {MatchesController} from '@/controllers/MatchesController';

export const getMatchesList = createAsyncThunk(
  MATCHES_LIST,
  async (body, {rejectWithValue}) => {
    try {
      const res = await MatchesController.matchsList();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
