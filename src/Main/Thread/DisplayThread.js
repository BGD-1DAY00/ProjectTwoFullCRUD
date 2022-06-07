import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  GO_TO_EDIT, UPDATE_AFTER_DELETE_THREAD, UPDATE_INFO } from '../../Store/reducers/actions/actions'
import { Comment } from '../Comments/Comment'
import { EditThread } from '../EditThread/EditThread'

export const DisplayThread = () => {
    const dispatch = useDispatch()
    const allThreads = useSelector(state=> state.mainThread.allThreads)
    const user_id = useSelector(state=> state.homeStored.user_id)
    const comments = useSelector(state=> state.editThreadReducer.comments)
    const ind = comments.map((val)=> val.thread_id)

    console.log(allThreads);

    function deleteThread(event, thread_id){
        const valToDelete = allThreads.findIndex(val=> val.thread_id === thread_id)
        if(valToDelete !== -1){
            allThreads.splice(valToDelete,1)
            dispatch({type: UPDATE_AFTER_DELETE_THREAD, updatedThreads: allThreads})
        }
    }
    function editThread(e, each){
        dispatch({type: UPDATE_INFO, package: each})
        dispatch({type: GO_TO_EDIT})
    }


  return (
    <div >
        {allThreads.length>0 ?allThreads.map((each,idx)=>{
            console.log(each)
            return(
                <div key={idx}>
                <div style={{display:'flex', justifyContent:'center', marginLeft: '4rem', marginTop: '2rem'}}>
                    {each.created_by === user_id? <button style={{background:'none', borderRadius:'.5rem', padding:'1rem', marginRight:'4rem'}} onClick={(e)=> editThread(e,each)}>Edit</button>: null}
                    {each.created_by === user_id? <button style={{background:'none', borderRadius:'.5rem', padding:'.7rem'}} onClick={(e)=>deleteThread(e, each.thread_id)}>Delete</button>: null}
                </div>
                <div style={{marginLeft: '15rem'}}>
                    <h1>Title: {each.thread}</h1>
                    <div style={{display: 'flex', marginRight: '9rem'}}>
                        <p style={{border: '4px solid black', borderRadius: '.5rem', margin: '.4rem'}}>ThreadID: {each.thread_id}</p>
                        <p style={{border: '4px solid black', borderRadius: '.5rem', margin: '.4rem'}}>UserID: {each.created_by}</p>
                    </div>
                        <p style={{marginRight:'9rem', textAlign:'center'}}>{each.date}</p>
                    <h3 style={{marginRight: '9rem'}}>Username: <br />{each.user}</h3>
                </div>
                <div>
                    <Comment each={each} />
                </div>
                </div>
            )
        }): null}
    </div>
  )
}
