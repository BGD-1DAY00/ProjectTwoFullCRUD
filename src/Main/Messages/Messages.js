import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SENDING_MESSAGE, SEND_MESSAGE,BACK_TO_MAIN_PAGE, GO_TO_MAIN_PAGE } from '../../Store/reducers/actions/actions'

export const Messages = ({_useDispatch = useDispatch, _useSelector = useSelector}) => {
    const dispatch = _useDispatch()
    const sendTo =  _useSelector(state=> state.messagesReducer.sendTo)
    const sendFrom =  _useSelector(state=> state.messagesReducer.sendFrom)
    const message =  _useSelector(state=> state.messagesReducer.message)
    const messages =  _useSelector(state=> state.messagesReducer.messages)


    function sendingMessage(event){
        dispatch({type: SENDING_MESSAGE, message: event.target.value})
    }

    function sendMessage(params) {
      if(message){
        dispatch({type: SEND_MESSAGE, message: {message, sendTo, sendFrom}})
        dispatch({type: BACK_TO_MAIN_PAGE})

      }
    }
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Send a Message to {sendTo.username}:</h2>
        <button onClick={()=>{
          dispatch({type:GO_TO_MAIN_PAGE})
        }} style={{background:'none', padding:'1rem',borderRadius:'.5rem', marginLeft:'.8rem', position:'absolute', right:'6rem', top:'3rem'}}>Send Home</button>
        <div style={{display:'flex', justifyContent:'center'}}>
          <label style={{fontSize:'1.4rem', display:'flex', justifyContent:'center'}} htmlFor="">Messages: </label>
          <input placeholder='send message' style={{paddingLeft:'.5rem', marginLeft:'.7rem'}} onChange={sendingMessage} value={message} type="text" />
          <button style={{background:'none', borderRadius:'.5rem', marginLeft:'.8rem'}} onClick={sendMessage}>send</button>
        </div>
    </div>
  )
}
