import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDING_COMMENT, ADD_TO_COMMENTS, EDIT_POST, GO_TO_EDIT_POSTS } from '../../Store/reducers/actions/actions'
export const Comment = ({each}) => {    
    const dispatch = useDispatch()
    const comment = useSelector(state=> state.editThreadReducer.comment)
    const comments = useSelector(state=> state.editThreadReducer.comments)
    const posts = useSelector(state=> state.editThreadReducer.posts)
    const userName = useSelector(state=> state.homeStored.user_id)
    const user_id = useSelector(state=> state.homeStored.user_id)
    console.log(userName, user_id)
    function addingToComment(event){
        dispatch({type: ADDING_COMMENT, comment: event.target.value})
    }
    function addToComments(event, {thread_id}){
        console.log(thread_id)
        const date = new Date(Date.now())
        dispatch({type: ADD_TO_COMMENTS, comment:{thread_id, comment, date: `${date}`, user: userName }, post: true})
    }
    console.log(comments)
    const ind = comments.map((i)=> {
        if(i.thread_id === each.thread_id){
            return i
        }
    }).filter((i)=> i !== undefined)
  
  console.log(ind);
  function editComment(e,val){
    dispatch({type: GO_TO_EDIT_POSTS})
    dispatch({type: EDIT_POST, post: val})
  }
    
  return (
    <div style={{marginLeft: '6rem', fontSize: '.7rem'}}>
        <h2>Comments:</h2>
        {ind.map((val, idx)=>{
            console.log(val.user)
            console.log(user_id)
            return(
                <div key={idx} style={{border: '1px solid black'}}>
                    <h2>{val.comment}</h2>
                    <div style={{display: 'flex'}}>
                    <p style={{border:'1px solid black', borderRadius: '.5rem', marginLeft:'20rem'}}>{val.date}</p>
                    <p style={{border:'1px solid black', borderRadius: '.5rem', marginRight:'22rem'}}>{val.user}</p>
                    {val.user ===user_id?<button onClick={(e)=>editComment(e,val)}>Edit</button>: null}
                    </div>
                </div>
            )
        })}
        <br />
        <label htmlFor="">comment: </label>
        <input onChange={addingToComment} value={comment} type="text" />
        <button onClick={(e)=>addToComments(e,each)}>send</button>
    </div>
  )
}
