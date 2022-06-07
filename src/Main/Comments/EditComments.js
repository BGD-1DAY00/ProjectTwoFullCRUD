import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDING_TO_UPDATING_COMMENT, BACK_TO_MAIN_PAGE } from '../../Store/reducers/actions/actions'

export const EditComments = () => {
    const dispatch = useDispatch()
    const comment = useSelector(state=>state.editThreadReducer.postToEdit)
    const comments = useSelector(state=> state.editThreadReducer.comments)
    const updatedComment = useSelector(state=> state.editThreadReducer.updatedComment)

    console.log(comment)
    console.log(comments);
    console.log(updatedComment);
    function updatingComment(event){
        console.log(updatedComment);
        dispatch({type: ADDING_TO_UPDATING_COMMENT, comment: event.target.value})
    }
    function updateComments(){
        const i = comments.map((val)=>{
            if(val.thread_id ===comment.thread_id){
                val.comment = updatedComment
            }
            dispatch({type: ADDING_TO_UPDATING_COMMENT, comment: ''})
            dispatch({type: BACK_TO_MAIN_PAGE})

        })
    }
  return (
    <div>
        <label htmlFor="">Comment:</label>
        <input onChange={updatingComment} value = {updatedComment} type="text" placeholder={comment.comment}  />
        <button onClick={updateComments}>UpdatePost</button>
    </div>
  )
}
