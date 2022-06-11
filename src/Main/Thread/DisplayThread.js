import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  GO_TO_EDIT, UPDATE_AFTER_DELETE_THREAD, UPDATE_INFO } from '../../Store/reducers/actions/actions'
import { Comment } from '../Comments/Comment'
import { EditThread } from '../EditThread/EditThread'

export const DisplayThread = ({_useDispatch = useDispatch, _useSelector = useSelector, _Comment = Comment}) => {
    const dispatch = _useDispatch()
    const allThreads = _useSelector(state=> state.mainThread.allThreads)
    const user_id = _useSelector(state=> state.homeStored.user_id)

    function deleteThread(event, thread_id){
        const filterThread = allThreads.filter((val)=>val.thread_id  !== thread_id)
        dispatch({type: UPDATE_AFTER_DELETE_THREAD, updatedThreads: filterThread})
        //Mutated the array
        // const valToDelete = allThreads.findIndex(val=> val.thread_id === thread_id)
        // if(valToDelete !== -1){
        //     allThreads.splice(valToDelete,1)
        //     dispatch({type: UPDATE_AFTER_DELETE_THREAD, updatedThreads: allThreads})
        // }
    }
    function editThread(e, each){
        dispatch({type: UPDATE_INFO, package: each})
        dispatch({type: GO_TO_EDIT})
    }


  return (
    <div style={{color:'white', fontWeight:'bolder',fontSize:'1.3rem'}} >
        {allThreads.length>0 ?allThreads.map((each,idx)=>{
            console.log(each)
            return(
                <div key={idx}>
                
                <div style={{display: 'flex', position: 'relative', width: '40vmax'}}>
                    <h2 style={{minWidth: '30rem', maxWidth:'30rem'}}>Title: {each.thread}</h2>
                    <div style={{width: '30%', display:'flex', justifyContent:'flex-end'}}>
                    {each.created_by === user_id? <button style={{background:'none', borderRadius:'.5rem', padding:'1rem', marginRight:'4rem', maxHeight:'5rem', display:'flex', alignItems:'center', justifyContent:'center'}} onClick={(e)=> editThread(e,each)}>Edit</button>: null}
                    {each.created_by === user_id? <button style={{background:'none', borderRadius:'.5rem', padding:'.7rem',maxHeight:'5rem', display:'flex', alignItems:'center', justifyContent:'center'}} onClick={(e)=>deleteThread(e, each.thread_id)}>Delete</button>: null}
                    </div>
                </div>
                    <div>
                        <p>UserID: {each.created_by}</p>
                        <p>ThreadID: {each.thread_id}</p>
                    </div>
                        <p>{each.date}</p>
                    <h3>Username: <br />{each.user}</h3>
                
                <div>
                    <_Comment each={each} />
                </div>
                </div>
            )
        }): null}
    </div>
  )
}
