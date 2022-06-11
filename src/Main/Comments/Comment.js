import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADDING_COMMENT,
  ADD_TO_COMMENTS,
  EDIT_POST,
  GO_TO_EDIT_POSTS,
  UPDATE_AFTER_DELTE_COMMENT
} from "../../Store/reducers/actions/actions";
import { v4 as uuidv4 } from 'uuid';
export const Comment = ({ each , _useDispatch = useDispatch, _useSelector = useSelector, _Date= Date, _uuidv4 = uuidv4}) => {
  const dispatch = _useDispatch();
  const comment = _useSelector((state) => state.editThreadReducer.comment);
  const comments = _useSelector((state) => state.editThreadReducer.comments);
  const posts = _useSelector((state) => state.editThreadReducer.posts);
  const userName = _useSelector((state) => state.homeStored.user_id);
  const user_id = _useSelector((state) => state.homeStored.user_id);
  console.log(userName, user_id);
  function addingToComment(event) {
    dispatch({ type: ADDING_COMMENT, comment: event.target.value });
  }
  function addToComments(event, { thread_id }) {
    const date = new Date(_Date.now());
    if(comment)
    dispatch({
      type: ADD_TO_COMMENTS,
      comment: { thread_id, comment, date: `${date}`, user: userName },
      post: true,
      comment_id: _uuidv4()
    });
  }
   const ind = comments
   .map((i) => {
     console.log(each)
     console.log(i)
     if (i.comment.thread_id=== each.thread_id) {
       return i;
      }
    })
    .filter((i) => i !== undefined)

    // const ind = comments.filter(i => {
    //    return i.comment.comment.thread_id=== each.thread_id
    // })

  function editComment(e, val) {
    dispatch({ type: GO_TO_EDIT_POSTS });
    dispatch({ type: EDIT_POST, post: val });
  }
  function deleteComment(e, val) {
    const filteredComments = comments.filter(i=> i.comment_id !== val.comment_id)
    dispatch({type: UPDATE_AFTER_DELTE_COMMENT, comments: filteredComments})
    //mutates the array
    // const valToDelete = comments.findIndex(i=> i.comment_id === val.comment_id)
    // if(valToDelete !== -1){
    //   //fail
    //     comments.splice(valToDelete,1)
    //     dispatch({type: UPDATE_AFTER_DELTE_COMMENT, comments: comments})
    // }
  }

  return (
    <div>
      <h4>Comments:</h4>
      {ind.map((val, idx) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              maxWidth: "90%",
              marginLeft: "4rem",
            }}
            key={idx}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginLeft: "0",
                position: "relative",
                marginRight: "37rem",
              }}
            >
              <h2>{val.comment.comment}</h2>
              {val.comment.user === user_id ? (
                <button
                  style={{
                    marginRight: "1rem",
                    padding: "1rem",
                    width: "7rem",
                    height: "4rem",
                    display: "flex",
                    justifySelf:'center',
                    alignSelf:'center',
                    justifyContent:'center',
                    background:'none',
                    borderRadius:'.4rem'
                  }}
                  onClick={(e) => editComment(e, val)}
                >
                  Edit
                </button>
              ) : null}
              {val.comment.user === user_id ? (
                <button
                  style={{
                    marginRight: "1rem",
                    padding: "1rem",
                    width: "7rem",
                    height: "4rem",
                    display: "flex",
                    justifySelf:'center',
                    alignSelf:'center',
                    justifyContent:'center',
                    background:'none',
                    borderRadius:'.4rem'
                  }}
                  onClick={(e) => deleteComment(e, val)}
                >
                  Delete
                </button>
              ) : null}
            </div>
            <div>
              <p>{val.comment.date}</p>
              <p>{val.comment.user}</p>
            </div>
          </div>
        );
      })}
      <br />
      <label style={{ fontSize: "1.4rem" }} htmlFor="">
        comment:{" "}
      </label>
      <input
        style={{
          borderRadius: ".6rem",
          background: "none",
          marginRight: "1rem",
          paddingLeft: ".5rem",
        }}
        placeholder='Add Comment'
        onChange={addingToComment}
        value={comment}
        type="text"
      />
      <button
        style={{
          margin: "1rem",
          padding: ".7rem",
          background: "none",
          borderRadius: ".7rem",
        }}
        onClick={(e) => addToComments(e, each)}
      >
        send
      </button>
    </div>
  );
};
