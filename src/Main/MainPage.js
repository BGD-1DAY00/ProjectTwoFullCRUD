import React from 'react'
import { useDispatch } from 'react-redux'
import { GO_BACK_HOME_FROM_CREATE_ACCOUNT } from '../Store/reducers/actions/actions'
import { DisplayUsers } from './DisplayUsers.js/DisplayUsers'
import { DisplayMessages } from './Messages/DisplayMessages'
import { CreateThread } from './Thread/CreateThread'
import { DisplayThread } from './Thread/DisplayThread'

export const MainPage = () => {
  const dispatch = useDispatch()
  function goBack(){
    dispatch({type: GO_BACK_HOME_FROM_CREATE_ACCOUNT})
  }
  return (
    <div>
          <div style={{display:'flex'}}>
            <div>
              <DisplayUsers />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginRight: '19rem', flexDirection: 'column' }}>
              <CreateThread />
              <DisplayThread />
            </div>
            <div style={{marginTop:'2rem', marginRight:'3rem', display: 'flex', flexDirection: 'column'}}>
              <button style={{marginBottom: '2rem', background: 'none', borderRadius: '.6rem', padding: '.5rem' }}  onClick={goBack}>Log Out</button>
              MESSAGES
              <DisplayMessages />
            </div>
          </div>
    </div>
  )
}
