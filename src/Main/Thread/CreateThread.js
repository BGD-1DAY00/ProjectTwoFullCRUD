import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_THREAD, CREATE_THREAD } from '../../Store/reducers/actions/actions'
import { v4 as uuidv4 } from 'uuid';


export const CreateThread = () => {
    const dispatch = useDispatch()
    
    const thread = useSelector(state=> state.mainThread.thread)
    const allThreads = useSelector(state=>state.mainThread.allThreads)
    const user_ID = useSelector(state=> state.homeStored.user_id)
    const userName = useSelector(state=>state.homeStored.userName)

    


    function addingThread(event){
        dispatch({type: CREATE_THREAD, thread: event.target.value})
    }
    function addToMainThread(event){
        event.preventDefault()
        const date = new Date(Date.now())
        dispatch({type: ADD_THREAD, threadInfo: {thread, thread_id: uuidv4(),date : `${date}`, created_by:user_ID, user: userName }})
    }

  return (
    <div>
        <form action="">
            <label htmlFor="">Create Thread: </label>
            <input onChange={addingThread} value={thread} type="text" />
            <button onClick={addToMainThread}>Submit</button>
        </form>

    </div>
  )
}
