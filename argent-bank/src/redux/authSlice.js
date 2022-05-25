import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Bese URL for the API
const client = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

// with login we retrieve JWT to
// authenticate the user and access to the USER Page
export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    let response = await client.post("/user/login", data);
    if (response.data.body.token) {
      localStorage.setItem("user", JSON.stringify(response.data.body.token));
    }
    return response.data.body.token;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});
// Fatch User info
export const user = createAsyncThunk("auth/user", async (token, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    let response = await client.post(
      `/user/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.body;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const initialState = {
  token: "",
  LogedIn: false,
  isLoading: false,
  err: null,
  usersInfo: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
      state.err = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.LogedIn = true;
      state.data = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [user.pending]: (state) => {
      state.err = null;
    },
    [user.fulfilled]: (state, action) => {
      state.LogedIn = true;
      state.usersInfo = action.payload;
    },
    [user.rejected]: (state, action) => {
      state.err = action.payload;
    },
  },
});
export default authSlice.reducer;
