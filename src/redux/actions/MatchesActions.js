import {MATCHES_ADD, MATCHES_EDIT, MATCHES_LIST, MATCHES_VIEW} from '../types';
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
export const addMatch = createAsyncThunk(
  MATCHES_ADD,
  async (body, {rejectWithValue}) => {
    try {
      const res = body;
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const ViewMatchDetails = createAsyncThunk(
  MATCHES_VIEW,
  async (body, {rejectWithValue}) => {
    try {
      const res = await MatchesController.viewMatchDetailsById(body);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const editMatchSchedule = createAsyncThunk(
  MATCHES_EDIT,
  async (body, {rejectWithValue}) => {
    try {
      const res = await MatchesController.editMatchScheduleById(body);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
