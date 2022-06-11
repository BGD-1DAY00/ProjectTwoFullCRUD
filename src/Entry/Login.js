import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainPage } from '../Main/MainPage'
import { ADD_FIRST_NAME, ADD_LAST_NAME, USER_EXIST, GO_BACK_HOME_FROM_CREATE_ACCOUNT,LOGIN_FAILED, GO_TO_MAIN_PAGE} from '../Store/reducers/actions/actions'

export const Login = ({_useDispatch, _useSelector}) => {
  const dispatch = _useDispatch()
  const username = _useSelector(state=> state.createStored.username)
  const password = _useSelector(state=> state.createStored.password)
  const users =  _useSelector(state=> state.createStored.users)
  const loginUserExist = _useSelector(state=>state.createStored.login_user_exist)

  function onValueChangeFirstName(event){
    dispatch({type: ADD_FIRST_NAME, username: event.target.value})
  } 
  function onValueChangeLastName(event){
    dispatch({type: ADD_LAST_NAME, password: event.target.value})
  }
  function checkForUser(event){
      event.preventDefault()
        if(users.length>0){
          for(let i =0; i<users.length; i++){
              if(users[i].username === username && users[i].password === password){
                  dispatch({type: USER_EXIST, login_user_exist: false, loginFail: false})
                  return dispatch({type: GO_TO_MAIN_PAGE, user_id: users[i].user_id, userName:  users[i].username})
              }
            }
          }
            return dispatch({type: LOGIN_FAILED, loginFail: true,login_user_exist: true})
          
      
    }
  return (
    <div>
        <div style={{display:'flex'}}>
          <h2 style={{marginRight: '1rem', }}>LOG IN ESTEEMED USER</h2>
          <button style={{background: 'none', borderRadius: '1rem'}} onClick={()=>{dispatch({type:GO_BACK_HOME_FROM_CREATE_ACCOUNT})}}>Go Back</button>
        </div>
        <form>
            <label htmlFor="">Username:</label>
            <input placeholder='Username' style={{padding: '.5rem',margin: '1rem', fontSize: '1.3rem', width: '12rem'}} onChange={onValueChangeFirstName} value={username} type="text" />
            <br />
            <label htmlFor="">Password:</label>
            <input placeholder='Password' style={{padding: '.55rem',margin: '1rem', fontSize: '1.3rem', width: '12rem'}} onChange={onValueChangeLastName} value={password} type="text" />

            <button style={{position:'relative', bottom:'2rem', padding:'1rem', background:'none'}} onClick={checkForUser}>Log In</button>
        </form>
        {loginUserExist ? <h4>Login Failed, Please Create A User</h4>: null}

    </div>
  )
}
