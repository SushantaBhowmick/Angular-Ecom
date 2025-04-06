import { createAction, props } from '@ngrx/store';

export const getUserProfile = createAction(
  '[User] getUserProfile',
);
export const getUserProfileSuccess = createAction(
  '[User] getUserProfile_Success',
  props<{ userProfile: any }>()
);
export const getUserProfileFailure = createAction(
  '[User] getUserProfile_Failure',
  props<{ error: any }>()
);
