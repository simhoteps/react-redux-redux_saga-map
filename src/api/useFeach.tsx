import { IPost } from "models/IPost";
import React, { useState, useEffect } from "react";

const useFetch = (param?: any) => {
  const [data, setData] = useState<IPost[]>([]);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?${new URLSearchParams(
    param
  )}`;

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ffa5ccd323msh1995fe6b8518c8ap1107fejsn05b1dcd1c998",
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((datas) => {
          datas.status === 404 || datas.status === 404 || datas.status === 400
            ? setError(true)
            : setError(false);
          setData(datas.data);
        })
        .catch((err) => {
          setError(err.message);
          setData([]);
        });
      setIsLoading(false);
    };
    fetchAPI();
  }, [url]);

  return [data, error, isLoading];
};

export default useFetch;
