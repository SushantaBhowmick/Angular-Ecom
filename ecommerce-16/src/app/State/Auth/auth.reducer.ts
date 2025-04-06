import { createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess, register, registerFailure, registerSuccess } from './auth.action';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  //  login
  on(login, (state) => ({
    ...state,
    loading: true,
    error: null,
    isAuthenticated: false,
  })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user,
    isAuthenticated: true,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    isAuthenticated: false,
  })),
//   register
  on(register, (state) => ({
    ...state,
    loading: true,
    error: null,
    isAuthenticated: false,
  })),
  on(registerSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user,
    isAuthenticated: true,
    error: null,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    isAuthenticated: false,
  })),
);
