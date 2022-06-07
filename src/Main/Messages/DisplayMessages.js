import React from 'react'
import { useSelector } from 'react-redux'

export const DisplayMessages = () => {
    const userMessages = useSelector(state=> state.messagesReducer.messages)
    const user = useSelector(state=>state.homeStored.user_id)
    const messages = userMessages.map((val)=> {
        if(val.sendTo.user_id === user){
            return {message: val.message, fromId: val.sendFrom.userFromId, fromName: val.sendFrom.userFromName}
        }
    }).filter((val)=> val !==undefined)
    console.log(userMessages)
  return (
    <div>
        {messages.map((each)=>{
            const {message, fromId, fromName} = each
            return(
                <div>
                    <h2>{message}</h2>
                    <h3>user:{fromName} ID:{fromId}</h3>
                </div>
            )
        })}
    </div>
  )
}
