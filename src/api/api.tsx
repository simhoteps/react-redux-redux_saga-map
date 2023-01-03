import React from "react";

export const getData = async (param: any) => {
  const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?${new URLSearchParams(
    param
  )}`;
  //console.log(url);

  await fetch(url, {
    method: "GET",

    headers: {
      "X-RapidAPI-Key": "ffa5ccd323msh1995fe6b8518c8ap1107fejsn05b1dcd1c998",
      "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
    })
    .catch((err) => {});
};
