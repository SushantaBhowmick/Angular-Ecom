import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login_Success',
  props<{ user: any }>()
);
export const loginFailure = createAction(
  '[Auth] Login_Failure',
  props<{ error: any }>()
);



export const register = createAction(
  '[Auth] Register',
  props<{
    user:any
  }>()
);
export const registerSuccess = createAction(
  '[Auth] Register_Success',
  props<{ user: any }>()
);
export const registerFailure = createAction(
  '[Auth] Register_Failure',
  props<{ error: any }>()
);
