import { GET_USER_SETTINGS, SETTINGS_LOADER } from "../types/typeUserSettings";
import { DOMAIN_NAME_PROJECT } from "../../constants/config";
import { smartFetch } from "./helpersCommon/smartFetch";
import { getFirstObjValue } from "./helpersCommon/getFirstObjValue";
import { alertManager } from "./helpersCommon/showAlert";
import { TYPE_ALERT, MESSAGE } from "../../constants";

export const showLoader = (loading) => {
  return {
    type: SETTINGS_LOADER,
    payload: loading,
  };
};

const setSettings = (objSettings) => {
  return {
    type: GET_USER_SETTINGS,
    payload: objSettings,
  };
};

export const setDefaultSettings = (userId) => async (dispatch, getState) => {
  const defaultSettings = { userId, limitNews: 40, orderNewsFirstNew: true };
  const url = `${DOMAIN_NAME_PROJECT}/settings_news.json`;
  const body = await JSON.stringify(defaultSettings);
  const headers = { "Content-Type": "application/json" };
  try {
    const resultFetch = await smartFetch(url, {
      method: "POST",
      body,
      headers,
    });
    const objSettings = {
      ...defaultSettings,
      uid: resultFetch.name,
    };
    dispatch(setSettings(objSettings));
  } catch (error) {
    alertManager(TYPE_ALERT.ERROR, error.message);
  }
};

export const getSettings = (userId) => async (dispatch) => {
  const url = `${DOMAIN_NAME_PROJECT}/settings_news.json?orderBy="userId"&equalTo="${userId}"`;
  try {
    const parsedResponse = await smartFetch(url);
    const { uid, userId, limitNews, orderNewsFirstNew } = getFirstObjValue(
      parsedResponse
    );
    const objSettings = {
      userId,
      uid,
      limitNews,
      orderNewsFirstNew,
    };
    dispatch(setSettings(objSettings));
  } catch (error) {
    alertManager(TYPE_ALERT.ERROR, error.message);
  }
};

export const updateSettings = (settingsData) => async (dispatch, getState) => {
  const { uid, userId } = getState().settingsState;
  const url = `${DOMAIN_NAME_PROJECT}/settings_news/${uid}.json`;
  const body = JSON.stringify(settingsData);
  const headers = { "Content-Type": "application/json" };
  try {
    dispatch(showLoader(true));
    await smartFetch(url, { method: "PATCH", body, headers });
    dispatch(getSettings(userId));
    alertManager(TYPE_ALERT.SUCCESS, MESSAGE.SAVE_SETTINGS_SUCCESS);
  } catch (error) {
    alertManager(TYPE_ALERT.ERROR, error.message);
  } finally {
    dispatch(showLoader(false));
  }
};
