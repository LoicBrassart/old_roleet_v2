import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import { api } from "../conf";

export default function CharactersPage() {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    api
      .get(`/blog/${articleId}`)
      .then(({ data }) => {
        setArticle(data);
      })
      .catch(error => {
        toast.error(
          "We encountered an error while fetching blog articles, sorry about that"
        );
      });
  }, [articleId]);

  return <Article data={article} />;
}
