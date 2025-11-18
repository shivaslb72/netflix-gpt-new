import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailervideo: null,
  },
  reducers: {
    AddNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    AddTrailerVideo: (state, action) => {
      state.trailervideo = action.payload;
    },
  },
});

export const { AddNowPlayingMovies, AddTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
