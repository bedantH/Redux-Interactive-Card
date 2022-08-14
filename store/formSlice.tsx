import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    form: {
      cardHolderName: "Your name",
      cardNumber: "0000 0000 0000 0000",
      expiryMM: "00",
      expiryYY: "00",
      cvv: "000",
    },
  },
  reducers: {
    addData: (state: any, action: any) => {
      state[action.payload.type] = action.payload.data;
    },
  },
});

export const { addData } = formSlice.actions;
export default formSlice.reducer;
