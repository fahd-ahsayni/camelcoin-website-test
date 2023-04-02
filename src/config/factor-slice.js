import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

// Define the navigation slice with a single reducer for updating the selected link
const camelcoinSlice = createSlice({
  name: "camelcoin",
  initialState,
  reducers: {},
});

// Export the action creator for updating the selected link
export const {} = camelcoinSlice.actions;

// Export the reducer for the navigation slice
export default camelcoinSlice.reducer;
