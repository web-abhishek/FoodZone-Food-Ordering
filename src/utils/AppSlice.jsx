import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  selectedService: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
});

export const { setLoading, setSelectedService } = appSlice.actions;
export default appSlice.reducer;