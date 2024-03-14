import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export interface UserCredentials {
  email: string,
  password: string
}

interface UserState {
  loading: boolean;
  user: any | null;
  error: string | null;
}

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials: UserCredentials, thunkAPI) => {
    try {
      const response: AxiosResponse<any> = await axios.post(
        "https://localhost:7260/api/Auth/login",
        userCredentials
      );
      const responseData = response.data.data;
      localStorage.setItem("user", JSON.stringify(responseData));
      return responseData;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  } as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload || "An error occurred";
      });
  },
});

export default userSlice.reducer;
