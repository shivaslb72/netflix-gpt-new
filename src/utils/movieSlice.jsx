import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularmovies: null,
    trailervideo: null,
  },
  reducers: {
    AddNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    AddPopularMovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    AddTrailerVideo: (state, action) => {
      state.trailervideo = action.payload;
    },
  },
});

export const { AddNowPlayingMovies, AddTrailerVideo, AddPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
