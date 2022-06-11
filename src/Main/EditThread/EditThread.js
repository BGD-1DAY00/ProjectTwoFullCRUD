import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ADDING_TO_THREAD, BACK_TO_MAIN_PAGE, UPDATED_THREAD} from '../../Store/reducers/actions/actions'

export const EditThread = ({_useDispatch = useDispatch, _useSelector = useSelector}) => {
    const dispatch= _useDispatch()
    const pack = _useSelector(state=> state.editThreadReducer.valToUpdate)
    const newThread = _useSelector(state=> state.editThreadReducer.newThread)

    const threads = _useSelector(state=> state.mainThread.allThreads)
    console.log(pack)
    console.log(threads);
    console.log(threads);
    console.log(pack)
    console.log(newThread)
    function infoUpdated(){
        let filteredThread = threads.filter((val)=> val.thread_id !== pack.thread_id)
        let th = threads.map((val)=>{
            console.log(pack.thread_id)
            console.log(pack)
            if(val.thread_id === pack.thread_id){
                console.log(val)
                const j =  {
                    ...val,
                    thread: newThread
                }
                val.thread = newThread
                return dispatch({type: UPDATED_THREAD, updatedObj: j, allThreads:filteredThread })
            } 
        })
        dispatch({type: BACK_TO_MAIN_PAGE})
    }

    function addingToNewThread(event){
        dispatch({type: ADDING_TO_THREAD, newThread: event.target.value})
    }
    function sendToMainPage(){
        dispatch({type: BACK_TO_MAIN_PAGE})
    }
  return (
    <div>
        <h1 style={{textAlign:'center'}} >Edit Your Thread</h1>
        <button style={{background:'none', borderRadius:'.5rem', marginLeft:'.8rem', padding:'1.4rem', position:'absolute', right:'7rem', top:'3rem'}} onClick={sendToMainPage}>Back To Main Page</button>
        <div style={{display:'flex', justifyContent:'center'}}>
            <label style={{fontSize:'1.4rem', display:'flex', justifyContent:'center'}} htmlFor="">Update Thread: </label>
            <input style={{paddingLeft:'.5rem', marginLeft:'.7rem', borderRadius:'.3rem'}} onChange={addingToNewThread} value={newThread} type="text" placeholder={pack.thread} />
            <button style={{background:'none', borderRadius:'.5rem', marginLeft:'.8rem'}} onClick={infoUpdated}>Update Info</button>
        </div>
    </div>
  )
}
