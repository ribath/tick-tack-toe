import {createSlice} from '@reduxjs/toolkit';
import AppState from '../interfaces/AppState';

const initialState: AppState = {
  boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  lastPos: -1,
  strike: 0,
  winner: ''
};

export const mainSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    addBoxValue: (state, action) => {
      state.boxes[action.payload.index] = action.payload.value;
      state.lastPos = action.payload.index;
    },
    addStrike: (state) => {
      state.strike += 1;
    },
    refreshState: (state) => {
      state.boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      state.lastPos = -1;
      state.strike = 0;
      state.winner = '';
    },
    addWinner: (state, action) => {
      state.winner = action.payload;
    },
    persistIfNotFinished: (state) => {
      if (state.winner !== '') {
        state.boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        state.lastPos = -1;
        state.strike = 0;
        state.winner = '';
      } else {
        state = state;
      }
    }
  }
});

export const {
  addBoxValue,
  addStrike,
  refreshState,
  addWinner,
  persistIfNotFinished
} = mainSlice.actions;

export default mainSlice.reducer;
