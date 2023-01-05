import { IPost } from "models/IPost";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "./actions/postsActions/postsActions";
import { RootState } from "./reducers/rootReducer";

export const GlobalHookFn = (param?: string) => {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );
  const data: IPost = posts;

  useEffect(() => {
    param && dispatch(fetchPostsRequest(param));
  }, []);
  return { pending, posts, error };
};
