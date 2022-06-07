import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ADDING_TO_THREAD, BACK_TO_MAIN_PAGE, UPDATED_THREAD} from '../../Store/reducers/actions/actions'

export const EditThread = () => {
    const dispatch= useDispatch()
    const pack = useSelector(state=> state.editThreadReducer.valToUpdate)
    const newThread = useSelector(state=> state.editThreadReducer.newThread)

    const threads = useSelector(state=> state.mainThread.allThreads)
    console.log(pack)
    console.log(threads);
    console.log(threads);

    function infoUpdated(){
        let th = threads.map((val)=>{
            if(val.thread_id === pack.thread_id){
                val.thread = newThread
                return dispatch({type: UPDATED_THREAD, allThreads: threads})
            } 
        })
        dispatch({type: BACK_TO_MAIN_PAGE})
    }

    function addingToNewThread(event){
        dispatch({type: ADDING_TO_THREAD, newThread: event.target.value})
    }
    function sendToMainPage(){

    }
  return (
    <div>
        <h1>Edit Your Thread</h1>
        <form action="">
            <label htmlFor="">Update Thread: </label>
            <input onChange={addingToNewThread} value={newThread} type="text" placeholder={pack.thread} />
            <button onClick={infoUpdated}>Update Info</button>
        </form>
        <button onClick={sendToMainPage}>Back To Main Page</button>
    </div>
  )
}
