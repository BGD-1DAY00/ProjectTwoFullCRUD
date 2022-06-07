import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SENDING_MESSAGE, SEND_MESSAGE,BACK_TO_MAIN_PAGE } from '../../Store/reducers/actions/actions'

export const Messages = () => {
    const dispatch = useDispatch()
    const sendTo =  useSelector(state=> state.messagesReducer.sendTo)
    const sendFrom =  useSelector(state=> state.messagesReducer.sendFrom)
    const message =  useSelector(state=> state.messagesReducer.message)
    const messages =  useSelector(state=> state.messagesReducer.messages)


    function sendingMessage(event){
        dispatch({type: SENDING_MESSAGE, message: event.target.value})
    }

    function sendMessage(params) {
        dispatch({type: SEND_MESSAGE, message: {message, sendTo, sendFrom}})
        dispatch({type: BACK_TO_MAIN_PAGE})
        console.log(messages);
    }
    console.log('sending to', sendTo)
    console.log('sending from',sendFrom)
  return (
    <div>
        <h2>Send a Message to {sendTo.username}:</h2>
        <label htmlFor="">Messages</label>
        <input onChange={sendingMessage} value={message} type="text" />
        <button onClick={sendMessage}>send</button>
    </div>
  )
}
