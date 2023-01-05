import React from "react";

const state = {
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

export const testUseAppSelector = (f: any) => f(state);
