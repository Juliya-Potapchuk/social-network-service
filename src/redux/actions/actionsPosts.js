import { POSTS_SET, POSTS_LOADER } from "../types/typesPosts";
import { transformToArr } from "./helpersCommon/transformToArr";
import { MESSAGE, TYPE_ALERT } from "../../constants";
import { DOMAIN_NAME_PROJECT } from "../../constants/config";
import { smartFetch } from "./helpersCommon/smartFetch";
import { alertManager } from "./helpersCommon/showAlert";

export const showLoader = (loading) => {
  return {
    type: POSTS_LOADER,
    payload: loading,
  };
};

const setPosts = (posts) => {
  return {
    type: POSTS_SET,
    payload: posts,
  };
};

export const createPost = (post) => async (dispatch) => {
  const url = `${DOMAIN_NAME_PROJECT}/posts.json`;
  const body = JSON.stringify(post);
  const headers = { "Content-Type": "application/json" };
  try {
    dispatch(showLoader(true));
    await smartFetch(url, { method: "POST", body, headers });
    alertManager(TYPE_ALERT.SUCCESS, MESSAGE.SENT_POST_SUCCESS);
  } catch (error) {
    alertManager(TYPE_ALERT.ERROR, error.message);
  } finally {
    dispatch(showLoader(false));
  }
};

export const getPosts = () => async (dispatch, getState) => {
  const { limitNews } = getState().settingsState;
  const url = `${DOMAIN_NAME_PROJECT}/posts.json?orderBy="timestamp"&limitToLast=${limitNews}`;
  try {
    dispatch(showLoader(true));
    const parsedResponse = await smartFetch(url);
    const posts = transformToArr(parsedResponse);
    dispatch(setPosts(posts));
  } catch (error) {
    alertManager(TYPE_ALERT.ERROR, error.message);
  } finally {
    dispatch(showLoader(false));
  }
};

export const deletePost = (uid) => async (dispatch) => {
  const url = `${DOMAIN_NAME_PROJECT}/posts/${uid}/.json`;
  const headers = { "Content-Type": "application/json" };
  try {
    dispatch(showLoader(true));
    await smartFetch(url, { method: "DELETE", headers });
    dispatch(getPosts());
    alertManager(TYPE_ALERT.SUCCESS, MESSAGE.DELETE_POST_SUCCESS);
  } catch (error) {
    alertManager(TYPE_ALERT.ERROR, error.message);
  } finally {
    dispatch(showLoader(false));
  }
};
