import { POSTS_SET, POSTS_LOADER } from "../types/typesPosts";

const INITIAL_STATE = {
  posts: [],
  loading: false,
};

function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POSTS_SET: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case POSTS_LOADER: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
}

export default postReducer;
