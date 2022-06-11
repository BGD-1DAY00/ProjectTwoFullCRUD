import React from 'react'
import { useDispatch } from 'react-redux'
import { GO_BACK_HOME_FROM_CREATE_ACCOUNT } from '../Store/reducers/actions/actions'
import { DisplayUsers } from './DisplayUsers.js/DisplayUsers'
import { DisplayMessages } from './Messages/DisplayMessages'
import { CreateThread } from './Thread/CreateThread'
import { DisplayThread } from './Thread/DisplayThread'

export const MainPage = ({_useDispatch = useDispatch, _DisplayUsers = DisplayUsers, _DisplayMessages=DisplayMessages, _CreateThread= CreateThread, _DisplayThread = DisplayThread}) => {
  const dispatch = _useDispatch()
  function goBack(){
    dispatch({type: GO_BACK_HOME_FROM_CREATE_ACCOUNT})
  }
  return (
    <div className='MainPage'>
          <div style={{width:'100vw', height: '100vh', display:'flex', justifyContent:'space-between'}}>
            <div>
              <_DisplayUsers />
            </div>
            <div style={{position:'relative', marginRight: '6rem'}}>
              <_CreateThread />
              <_DisplayThread />
            </div>
              <button style={{marginBottom: '2rem', background: 'none', borderRadius: '.6rem', padding: '.5rem',position:'absolute', top:'1rem', right: '4rem' }}  onClick={goBack}>Log Out</button>
            <div style={{marginRight:'3rem',position:'relative'}}>
              <h4>MESSAGES</h4>
              <_DisplayMessages />
            </div>
          </div>
    </div>
  )
}
