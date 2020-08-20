import { GET_USER_SETTINGS, SETTINGS_LOADER } from "../types/typeUserSettings";

const INITIAL_STATE = {
  limitNews: null,
  orderNewsFirstNew: null,
  userId: null,
  uid: null,
  loading: false,
};

function settingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_SETTINGS: {
      const { limitNews, orderNewsFirstNew, userId, uid } = action.payload;
      return {
        ...state,
        limitNews,
        orderNewsFirstNew,
        userId,
        uid,
      };
    }
    case SETTINGS_LOADER: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
}

export default settingsReducer;
