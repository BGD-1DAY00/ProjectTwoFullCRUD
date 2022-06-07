import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainPage } from '../Main/MainPage'
import { ADD_FIRST_NAME, ADD_LAST_NAME, USER_EXIST, GO_BACK_HOME_FROM_CREATE_ACCOUNT,LOGIN_FAILED, GO_TO_MAIN_PAGE} from '../Store/reducers/actions/actions'

export const Login = () => {
  const dispatch = useDispatch()
  const username = useSelector(state=> state.createStored.username)
  const password = useSelector(state=> state.createStored.password)
  const users =  useSelector(state=> state.createStored.users)
  const loginUserExist = useSelector(state=>state.createStored.login_user_exist)

  function onValueChangeFirstName(event){
    dispatch({type: ADD_FIRST_NAME, username: event.target.value})
  }
  function onValueChangeLastName(event){
    dispatch({type: ADD_LAST_NAME, password: event.target.value})
  }
  function checkForUser(event){
      event.preventDefault()
      if(password && username){
        if(users.length>0){
          for(let i =0; i<users.length; i++){
              if(users[i].username === username && users[i].password === password){
                  let id = users[i].user_id
                  let userName = users[i].username
                  dispatch({type: USER_EXIST, login_user_exist: false, loginFail: false})
                  return dispatch({type: GO_TO_MAIN_PAGE, user_id: id, userName: userName})
              }
            }
          }
          dispatch({type: LOGIN_FAILED, loginFail: true,login_user_exist: true})
      }
    }
  return (
    <div>
        <h2 style={{marginRight: '9rem'}}>LOG IN ESTEEMED USER</h2>
        <form action="" style={{marginRight: '9rem'}}>
            <label htmlFor="">Username:</label>
            <input onChange={onValueChangeFirstName} value={username} type="text" />

            <label htmlFor="">Password:</label>
            <input onChange={onValueChangeLastName} value={password} type="text" />

            <button onClick={checkForUser}>Log In</button>
        </form>
        {loginUserExist ? <h4>Login Failed, Please Create A User</h4>: null}
        <button style={{marginRight: '9rem'}} onClick={()=>{dispatch({type:GO_BACK_HOME_FROM_CREATE_ACCOUNT})}}>Go Back</button>

    </div>
  )
}
