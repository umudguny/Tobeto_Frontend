import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { loadingReducer } from "./loading/loadingSlice";
import userReducer from "./reducers/userReducer";
import activityReducer from "./reducers/activityReducer";
import { ActivityState } from "./reducers/activityReducer";
export interface RootState {
  activity: ActivityState;
}
const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  user: userReducer,
  activity: activityReducer,
});

export const store = configureStore({ reducer: rootReducer });
