export enum postTypes {
    FETCH_POST_REQUEST = "FETCH_POST_REQUEST",
    FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
    FETCH_POST_FAILURE = "FETCH_POST_FAILURE"
  }
  
  export interface postLyricsAction {
    type: typeof postTypes.FETCH_POST_REQUEST;
    param: string;
  }