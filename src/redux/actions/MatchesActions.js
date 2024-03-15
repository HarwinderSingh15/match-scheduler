import {
  MATCHES_ADD,
  MATCHES_DELETE,
  MATCHES_EDIT,
  MATCHES_LIST,
  MATCHES_VIEW,
} from '../types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {MatchesController} from '@/controllers/MatchesController';
import {goBack} from '@/navigation/navigationRef';

export const getSchedulesList = createAsyncThunk(
  MATCHES_LIST,
  async (body, {rejectWithValue}) => {
    try {
      const res = await MatchesController.getAllMatchSchedule();
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
      const res = await MatchesController.addMatchSchedule(body);
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

export const deleteSchedule = createAsyncThunk(
  MATCHES_DELETE,
  async (body, {rejectWithValue}) => {
    try {
      const res = await MatchesController.deleteScheduleById(body);
      goBack();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
