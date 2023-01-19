import { IPost } from "models/IPost";
import React from "react";

const state = {
  pending: false,
  posts: {} as IPost,
  error: null,
};

export const testUseAppSelector = (f: any) => f(state);
