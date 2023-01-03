import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../../actions/postsActions/postsActions";
import { postTypes } from "../../actionTypes/postsTypes";
import * as actionTypes from "../../actionTypes/postsTypes";

const getPosts = (param: string) =>
  axios.get<IPost>(
    `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?${new URLSearchParams(
      { country: param }
    )}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ffa5ccd323msh1995fe6b8518c8ap1107fejsn05b1dcd1c998",
        "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      },
    }
  );

function* fetchPostsSaga({ param }: actionTypes.postLyricsAction): any {
  try {
    const response = yield call(getPosts, param);
    yield put(
      fetchPostsSuccess({
        posts: response.data.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
