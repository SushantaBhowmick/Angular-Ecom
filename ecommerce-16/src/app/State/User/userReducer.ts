import { createReducer, on } from '@ngrx/store';
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess } from './user.action';

const initialState = {
  userProfile: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const userReducer = createReducer(
  initialState,
  //  login
  on(getUserProfile, (state) => ({
    ...state,
    loading: true,
    error: null,
    isAuthenticated: false,
  })),
  on(getUserProfileSuccess, (state, { userProfile }) => ({
    ...state,
    loading: false,
    userProfile,
    isAuthenticated: true,
    error: null,
  })),
  on(getUserProfileFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    isAuthenticated: false,
  })),

);
