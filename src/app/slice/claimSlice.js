import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  claimListData: [],
};

const claimSlice = createSlice({
  name: "claim",
  initialState,
  reducers: {
    addClaimList: (state, action) => {
      state.claimListData = action.payload;
    },
  },
});

export const { addClaimList } = claimSlice.actions;

export default claimSlice.reducer;
