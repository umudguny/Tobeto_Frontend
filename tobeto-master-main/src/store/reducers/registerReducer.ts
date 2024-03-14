import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface UserData {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

interface UserState {
  loading: boolean;
  user: UserData | null;
  token: string | null;
  error: string | null;
}

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (jsonUserData: string) => {
    try {
      const response = await axios.post<any>(
        "https://localhost:7260/api/Auth/register",
        jsonUserData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userData: UserData = response.data.userData;
      const token = response.data.token;
      if (token) {
        Cookies.set("token", token);
      }
      return userData;
    } catch (error) {
      throw error;
    }
  }
);

const initialState: UserState = {
  loading: false,
  user: null,
  token: Cookies.get("token") || null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.error as Error).message;
      });
  },
});

export default userSlice.reducer;
