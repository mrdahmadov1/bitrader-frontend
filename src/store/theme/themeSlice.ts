import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateThemeVariables } from "@/helpers/updateThemeVariables";

const setLocalStorageTheme = (newTheme: string) => {
  localStorage.setItem("currentTheme", newTheme);
};

const getLocalStorageTheme = () => {
  return localStorage.getItem("currentTheme") || "dark";
};

export const toggleTheme = createAsyncThunk(
  "theme/toggleTheme",
  async (newTheme: string) => {
    updateThemeVariables(newTheme);
    setLocalStorageTheme(newTheme);
    return newTheme;
  }
);

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: getLocalStorageTheme(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleTheme.fulfilled, (state, action) => {
      state.currentTheme = action.payload;
    });
  },
});

export default themeSlice.reducer;
