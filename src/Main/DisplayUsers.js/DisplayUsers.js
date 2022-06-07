import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { GO_TO_MESSAGES, SENDING_TO } from '../../Store/reducers/actions/actions';
import { bindActionCreators } from 'redux';

export const DisplayUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(state=> state.createStored.users)
    const userFromId = useSelector(state=> state.homeStored.user_id)
    const userFromName = useSelector(state=> state.homeStored.userName)

    function goToMessages(event, user){
        dispatch({type: GO_TO_MESSAGES})
        dispatch({type: SENDING_TO, sendTo: user, sendingFrom: {userFromId, userFromName}})
    }
    return (
    <div style={{marginLeft: '2rem'}}>
        <h2>USERS ACTIVE!</h2>
        {users.map((user,idx)=>{
            return(
                <div key={idx} style={{padding:'.5rem'}}>
                    <div style={{marginBottom: '.5rem'}}>user: {user.username}</div>
                    <button onClick={(event)=>goToMessages(event, user)} style={{background: 'none', padding: '.7rem', borderRadius: '1rem'}}>Send Message</button>
                </div>
            )
        })}
    </div>
  )
}
