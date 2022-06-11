import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDING_TO_UPDATING_COMMENT, BACK_TO_MAIN_PAGE, UPDATE_EDIT_COMMENTS, UPDATING_COMMENT } from '../../Store/reducers/actions/actions'

export const EditComments = ({_useSelector = useSelector, _useDispatch = useDispatch}) => {
    const dispatch = _useDispatch()
    const commenttoUpdate = _useSelector(state=>state.editThreadReducer.postToEdit)
    const comments = _useSelector(state=> state.editThreadReducer.comments)
    const updatedComment = _useSelector(state=> state.editThreadReducer.updatedComment)
    console.log(commenttoUpdate)
    console.log(updatedComment)

    function updatingComment(event){
        console.log(updatedComment);
        dispatch({type: UPDATING_COMMENT, comment: event.target.value})
    }
    function updateComments(){
        const i = comments.filter((val)=> val.comment_id !==commenttoUpdate.comment_id)

        const updatedObj = comments.map((val)=>{
            if(val.comment_id ===commenttoUpdate.comment_id){
                 const j =  {
                     ...val,
                     comment: {
                         ...val.comment,
                         comment: updatedComment
                     }
                 }
                 dispatch({type: ADDING_TO_UPDATING_COMMENT, comment: '', array: i, objToUpdate: j})
                 dispatch({type: UPDATE_EDIT_COMMENTS})
                 dispatch({type: BACK_TO_MAIN_PAGE})
             }
         })
    }
    
  return (
    <div  style={{display:'flex', justifyContent:'center'}}>
        <label style={{fontSize:'1.4rem', display:'flex', justifyContent:'center'}} htmlFor="">Comment:</label>
        <input style={{paddingLeft:'.5rem', marginLeft:'.7rem'}} onChange={updatingComment} value = {updatedComment} type="text" placeholder={commenttoUpdate.comment.comment}  />
        <button style={{background:'none', borderRadius:'.5rem', marginLeft:'.8rem'}} onClick={updateComments}>UpdatePost</button>
    </div>
  )
}
