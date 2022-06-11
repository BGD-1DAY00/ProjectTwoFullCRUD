import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SENDING_MESSAGE, SEND_MESSAGE,BACK_TO_MAIN_PAGE, SEND_REPLY, SENDING_REPLY } from '../../Store/reducers/actions/actions'


export const DisplayMessages = ({_useSelector = useSelector, _useDispatch = useDispatch}) => {
    const dispatch = _useDispatch()
    const userMessages = _useSelector(state=> state.messagesReducer.messages)
    const replys = _useSelector(state => state.messagesReducer.replys)
    const user = _useSelector(state=>state.homeStored.user_id)
    const sendTo =  _useSelector(state=> state.messagesReducer.sendTo)
    const sendFrom =  _useSelector(state=> state.messagesReducer.sendFrom)
    const message = _useSelector(state => state.messagesReducer.message)
    const reply =  _useSelector(state=> state.messagesReducer.reply)


    const messages = userMessages.map((val)=> {
        if(val.sendTo.user_id === user){
            return {message: val.message, fromId: val.sendFrom.userFromId, fromName: val.sendFrom.userFromName}
        }
    }).filter((val)=> val !==undefined)
    console.log(userMessages)

    const userRelys = replys.map((val)=> {
        if(val.sendFrom.userFromId=== user){
            return {reply: val.reply, fromId: val.sendFrom.userFromId, fromName: val.sendFrom.userFromName}
        }
    }).filter((val)=> val !==undefined)
    console.log(userRelys)



    function sendingReply(event){
        dispatch({type: SENDING_REPLY, reply: event.target.value})
    }
    function sendReply(params) {
        dispatch({type: SEND_REPLY, replys: {reply,message, sendTo, sendFrom}})
    }

  return (
    <div style={{marginRight:'1rem'}}>
        {messages.map((each)=>{
            const {message, fromId, fromName} = each
            return(
                <div>
                    <h2>{message}</h2>
                    <h3>user:{fromName} ID:{fromId}</h3>
                </div>
            )
        })}
                {messages.length> 0?<div>
                    <label htmlFor="">Reply</label>
                    <input placeholder='send reply' onChange={sendingReply} value={reply} type="text" />
                    <button onClick={sendReply}>send</button>
                </div>: null}
        {userRelys.length> 0? 
            replys.map((each)=>{
            return(
                <div style={{margin:'.8rem 0', border:'4px solid cornsilk', borderRadius:'.8rem', maxWidth: '18rem'}}>
                    <h2>Message Sent: {each.message}</h2>
                    <h2>Reply: {each.reply}</h2>
                    <h3>From: {each.sendTo.username}</h3>
                </div>
            )
        }): null
        }
    </div>
  )
}
