import React from "react";
import { useState, useEffect } from "react";
import CommentList from "./CommentsList";
import AddComment from "./AddComment";
import { useSelected } from "../context/selectedContext";
const Api_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODU5Yjg1MjRlZjFiYzAwMTVkZjVhZDIiLCJpYXQiOjE3NTI4NTg0MDMsImV4cCI6MTc1NDA2ODAwM30.RMtDjGIUuLU4cQgpGrCJit52MvS7pmJgBMGJMrpGOlw";

function CommentArea({ colorText }) {
  const { selected: asin } = useSelected();
  const Api_Url = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;
  const [comment, setComment] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`${Api_Url}`, {
        headers: {
          Authorization: `Bearer ${Api_Key}`,
        },
      });
      const data = await response.json();
      setComment(data);
    } catch (error) {
      console.error("Errore nel recupero dei commenti: ", error);
    }
  };
  useEffect(() => {
    if (asin) fetchComments();
    else setComment([]);
  }, [asin]);
  console.log(comment);

  return (
    <>
      <div className="mt-3">
        {asin && (
          <AddComment
            asin={asin}
            onNewComment={fetchComments}
            colorText={colorText}
          />
        )}
        {asin && (
          <CommentList
            comments={comment}
            onEditOrDeleteComment={fetchComments}
            colorText={colorText}
          />
        )}
      {!asin && <div className="text-center text-muted">
        <i className="bi bi-book" style={{ fontSize: "3rem" }}></i>
        <p className="mt-2">
          Seleziona un libro per visualizzare o lasciare un commento.
        </p>
      </div>}
      </div>
    </>
  );
}

export default CommentArea;
