import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  moreInfoAboutUser: null,
  cardDetails: null,
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.userData = action.payload;
    },
    addMoreInfoAboutUser: (state, action) => {
      state.moreInfoAboutUser = action.payload;
    },
    addCardDetails: (state, action) => {
      state.cardDetails = action.payload;
    },
  },
});

export const { addUserInfo, addMoreInfoAboutUser, addCardDetails } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
