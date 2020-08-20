import { smartFetch } from "./helpersCommon/smartFetch";
import { alertManager } from "./helpersCommon/showAlert";
import { AUTH_USER_SET, AUTH_LOADER, AUTH_STATUS } from "../types/typesSession";
import {
  MESSAGE,
  TYPE_ALERT,
  API_KEY,
  DOMAIN_NAME_AUTH,
  AUTHORIZED,
  UNAUTHORIZED,
} from "../../constants";
import {
  localStorageSet,
  localStorageGet,
  checkAccessToken,
} from "./helpersCommon/localStorageManager";

export const showLoader = (loading) => {
  return {
    type: AUTH_LOADER,
    payload: loading,
  };
};

export const statusUserSet = (status) => {
  return {
    type: AUTH_STATUS,
    payload: status,
  };
};

export const setAuthUserData = (authUser) => {
  return {
    type: AUTH_USER_SET,
    payload: authUser,
  };
};

export const authUserManager = (authUser) => (dispatch) => {
  if (authUser) {
    dispatch(setAuthUserData(authUser));
    dispatch(statusUserSet(AUTHORIZED));
  } else {
    localStorage.clear();
    dispatch(setAuthUserData(null));
    dispatch(statusUserSet(UNAUTHORIZED));
  }
};

export const addUserDataToProfile = (userName) => async (dispatch) => {
  const accessToken = localStorageGet("access_token");
  const url = `${DOMAIN_NAME_AUTH}/v1/accounts:update?key=${API_KEY}`;
  const body = JSON.stringify({
    idToken: accessToken,
    displayName: userName,
    returnSecureToken: false,
  });
  const headers = { "Content-Type": "application/json" };
  try {
    await smartFetch(url, {
      method: "POST",
      body,
      headers,
    });
  } catch (error) {
    dispatch(authUserManager());
    alertManager(TYPE_ALERT.ERROR, error.message);
  }
};

export const signUp = (email, password, userName) => async (dispatch) => {
  const url = `${DOMAIN_NAME_AUTH}/v1/accounts:signUp?key=${API_KEY}`;
  const body = JSON.stringify({ email, password, returnSecureToken: true });
  const headers = { "Content-Type": "application/json" };
  try {
    dispatch(showLoader(true));
    const parsedResponse = await smartFetch(url, {
      method: "POST",
      body,
      headers,
    });
    localStorageSet("access_and_refresh_tokens", {
      accessToken: parsedResponse.idToken,
      refreshToken: parsedResponse.refreshToken,
      expiresIn: parsedResponse.expiresIn,
    });
    dispatch(addUserDataToProfile(userName));
    dispatch(authUserManager({ email, userName, uid: parsedResponse.localId }));
    alertManager(TYPE_ALERT.SUCCESS, MESSAGE.SIGN_UP_SUCCESS);
  } catch (error) {
    dispatch(authUserManager());
    alertManager(TYPE_ALERT.ERROR, error.message);
  } finally {
    dispatch(showLoader(false));
  }
};

export const signIn = (email, password) => async (dispatch) => {
  const url = `${DOMAIN_NAME_AUTH}/v1/accounts:signInWithPassword?key=${API_KEY}`;
  const body = JSON.stringify({ email, password, returnSecureToken: true });
  const headers = { "Content-Type": "application/json" };
  try {
    dispatch(showLoader(true));
    const parsedResponse = await smartFetch(url, {
      method: "POST",
      body,
      headers,
    });
    const { email, displayName: userName, localId: uid } = parsedResponse;
    localStorageSet("access_and_refresh_tokens", {
      accessToken: parsedResponse.idToken,
      refreshToken: parsedResponse.refreshToken,
      expiresIn: parsedResponse.expiresIn,
    });
    dispatch(authUserManager({ email, userName, uid }));
  } catch (error) {
    dispatch(authUserManager());
    alertManager(TYPE_ALERT.ERROR, error.message);
  } finally {
    dispatch(showLoader(false));
  }
};

export const resetPassword = (email) => async (dispatch) => {
  const url = `${DOMAIN_NAME_AUTH}/v1/accounts:sendOobCode?key=${API_KEY}`;
  const body = JSON.stringify({ requestType: "PASSWORD_RESET", email });
  const headers = { "Content-Type": "application/json" };
  try {
    dispatch(showLoader(true));
    await smartFetch(url, {
      method: "POST",
      body,
      headers,
    });
    alertManager(TYPE_ALERT.SUCCESS, MESSAGE.RESET_PASSWORD_SUCCESS);
  } catch (error) {
    alertManager(TYPE_ALERT.ERROR, error.message);
  } finally {
    dispatch(showLoader(false));
  }
};

export const updatePassword = (password) => async (dispatch) => {
  const accessToken = localStorageGet("access_token");
  const url = `${DOMAIN_NAME_AUTH}/v1/accounts:update?key=${API_KEY}`;
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify({
    idToken: accessToken,
    password,
    returnSecureToken: true,
  });
  try {
    dispatch(showLoader(true));
    const parsedResponse = await smartFetch(url, {
      method: "POST",
      body,
      headers,
    });
    localStorageSet("access_and_refresh_tokens", {
      accessToken: parsedResponse.idToken,
      refreshToken: parsedResponse.refreshToken,
      expiresIn: parsedResponse.expiresIn,
    });
    alertManager(TYPE_ALERT.SUCCESS, MESSAGE.UPDATE_PASSWORD_SUCCESS);
  } catch (error) {
    dispatch(authUserManager());
    alertManager(TYPE_ALERT.ERROR, error.message);
  } finally {
    dispatch(showLoader(false));
  }
};

export const getUserData = (accessToken) => async (dispatch) => {
  const url = `${DOMAIN_NAME_AUTH}/v1/accounts:lookup?key=${API_KEY}`;
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify({ idToken: accessToken });
  try {
    const parsedResponse = await smartFetch(url, {
      method: "POST",
      body,
      headers,
    });
    const {
      displayName: userName,
      localId: uid,
      email,
    } = parsedResponse.users[0];
    dispatch(authUserManager({ email, userName, uid }));
  } catch (error) {
    dispatch(authUserManager());
    alertManager(TYPE_ALERT.ERROR, error.message);
  }
};

export const authorization = () => async (dispatch) => {
  const refreshToken = localStorageGet("refresh_token");
  const url = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const body = `grant_type=refresh_token&refresh_token=${refreshToken}`;
  try {
    if (!checkAccessToken()) {
      const parsedResponse = await smartFetch(url, {
        method: "POST",
        body,
        headers,
      });
      localStorageSet("access_and_refresh_tokens", {
        accessToken: parsedResponse.access_token,
        refreshToken: parsedResponse.refresh_token,
        expiresIn: parsedResponse.expires_in,
      });
      dispatch(getUserData(parsedResponse.access_token));
    }
  } catch (error) {
    dispatch(authUserManager());
  }
};
