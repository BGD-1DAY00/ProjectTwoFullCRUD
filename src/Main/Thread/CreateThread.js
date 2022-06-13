import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_THREAD, CREATE_THREAD } from '../../Store/reducers/actions/actions'
import { v4 as uuidv4 } from 'uuid';
import {Button} from 'react-bootstrap'


export const CreateThread = ({_useDispatch = useDispatch, _useSelector = useSelector, _Date = Date, _uuidv4 = uuidv4}) => {
    const dispatch = _useDispatch()
    
    const thread = _useSelector(state=> state.mainThread.thread)
    const allThreads = _useSelector(state=>state.mainThread.allThreads)
    const user_ID = _useSelector(state=> state.homeStored.user_id)
    const userName = _useSelector(state=>state.homeStored.userName)

    


    function addingThread(event){
        dispatch({type: CREATE_THREAD, thread: event.target.value})
    }
    function addToMainThread(event){
        event.preventDefault()
        const date = new Date(_Date.now())
        if(thread){
            dispatch({type: ADD_THREAD, threadInfo: {thread, thread_id: _uuidv4(),date : `${date}`, created_by:user_ID, user: userName }})
        }
    }

  return (
    <div>
        <form action="">
            <label style={{fontSize:'1.5rem'}} htmlFor="">Create Thread: </label>
            <input placeholder='Add Thread...' style={{borderRadius:'1rem', marginRight:'.6rem', padding:'.5rem', background:'cornsilk'}} onChange={addingThread} value={thread} type="text" />
            <Button color="success" style={{padding:'.6rem', background:'none', borderRadius:'1rem'}} onClick={addToMainThread}>Submit</Button>
        </form>

    </div>
  )
}
