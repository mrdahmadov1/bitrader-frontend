import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateThemeVariables } from "../../helpers/updateThemeVariables";
import { RootState } from "../configureStore";

export const toggleTheme = createAsyncThunk(
  "theme/toggleTheme",
  async (_, { getState }) => {
    const currentTheme = (getState() as RootState).theme.currentTheme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    updateThemeVariables(newTheme);

    return newTheme;
  }
);

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "light",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleTheme.fulfilled, (state, action) => {
      state.currentTheme = action.payload;
    });
  },
});

export default themeSlice.reducer;
