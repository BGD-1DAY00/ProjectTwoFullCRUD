import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { GO_TO_MESSAGES, SENDING_TO } from '../../Store/reducers/actions/actions';

export const DisplayUsers = ({_useDispatch = useDispatch, _useSelector = useSelector}) => {
    const dispatch = _useDispatch()
    const users = _useSelector(state=> state.createStored.users)
    const userFromId = _useSelector(state=> state.homeStored.user_id)
    const userFromName = _useSelector(state=> state.homeStored.userName)

    function goToMessages(event, user){
        dispatch({type: GO_TO_MESSAGES})
        dispatch({type: SENDING_TO, sendTo: user, sendingFrom: {userFromId, userFromName}})
    }
    return (
    <div >
        <h2 style={{marginLeft: '1rem'}}>USERS ACTIVE!</h2>
        {users.map((user,idx)=>{
            return(
                <div key={idx}>
                    <div style={{fontSize:'1.5rem'}}>User: {user.username}</div>
                    <button style={{padding:'.9rem', margin:'.7rem 0rem', background:'none', borderRadius:'1rem'}} onClick={(event)=>goToMessages(event, user)} >Send Message</button>
                </div>
            )
        })}
    </div>
  )
}
