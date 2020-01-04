import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Articles from "../components/Articles";
import { api } from "../conf";

export default function CharactersPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api
      .get("/blog")
      .then(({ data }) => {
        setArticles(data);
      })
      .catch(error => {
        toast.error(
          "We encountered an error while fetching blog articles, sorry about that"
        );
      });
  }, []);

  return (
    <>
      <h2>Blog</h2>
      <Articles data={articles} />
    </>
  );
}
