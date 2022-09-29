import { User } from 'firebase/auth';

import { USER_ACTION_TYPES, AuthorizationData } from './user.types';

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';

import {
  UserData,
  AdditionalInformation,
} from '../../utils/firebase/firebase.utils';

type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  AuthorizationData
>;

type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  AuthorizationData & {
    displayName: string;
  }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  {
    user: User;
    additionalDetails: AdditionalInformation;
  }
>;

type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;

type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const checkUserSession = (): CheckUserSession =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = (): GoogleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (
  email: string,
  password: string
): EmailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
): SignUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (
  user: User,
  additionalDetails: AdditionalInformation
): SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalDetails,
  });

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = (): SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
