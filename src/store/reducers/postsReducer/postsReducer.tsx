import { postTypes } from "../../actionTypes/postsTypes";
import { PostsActions, PostsState } from "../../types/types";
import { IPost } from "../../../models/IPost";

const initialState: PostsState = {
  pending: false,
  posts: {
    recovered: null,
    deaths: 6692310,
    confirmed: 661122772,
    lastChecked: "2023-01-03T17:44:23+00:00",
    lastReported: "2023-01-03T04:21:07+00:00",
    location: "Global",
  },
  error: null,
};

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null,
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: {},
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
