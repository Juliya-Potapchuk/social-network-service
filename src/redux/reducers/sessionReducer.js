import {
  AUTH_USER_SET,
  SIGN_OUT,
  AUTH_LOADER,
  AUTH_STATUS,
} from "../types/typesSession";
import { UNAUTHORIZED } from "../../constants";

const INITIAL_STATE = {
  statusUser: UNAUTHORIZED,
  authUser: null,
  loading: false,
};

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER_SET: {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        authUser: null,
      };
    }
    case AUTH_LOADER: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case AUTH_STATUS: {
      return {
        ...state,
        statusUser: action.payload,
      };
    }
    default:
      return state;
  }
}

export default sessionReducer;
