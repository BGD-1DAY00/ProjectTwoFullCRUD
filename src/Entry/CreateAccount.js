import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_FIRST_NAME, CREATE_USER, ADD_LAST_NAME,GO_BACK_HOME_FROM_CREATE_ACCOUNT, USER_EXIST, GO_TO_MAIN_PAGE } from '../Store/reducers/actions/actions'
import { v4 as uuidv4 } from 'uuid';

export const CreateAccount = ({_useDispatch = useDispatch, _useSelector = useSelector}) => {
  const dispatch = _useDispatch()

  let username = _useSelector(state=> state.createStored.username)
  let password = _useSelector(state=> state.createStored.password)
  const users = _useSelector(state=> state.createStored.users)
  const user_exist = _useSelector(state=>state.createStored.user_exist)

  function onValueChangeFirstName(event){
    dispatch({type: ADD_FIRST_NAME, username: event.target.value})
  }
  function onValueChangeLastName(event){
    dispatch({type: ADD_LAST_NAME, password: event.target.value})
  }
  function createUser(event){
    event.preventDefault()  
    if(password && username){
      if(users.length>0){
        for(let i =0; i<users.length; i++){
            if(users[i].username === username && users[i].password === password){
                return dispatch({type: USER_EXIST, user_exist: true})
            }
          }
        }
        let user_id = uuidv4()
        dispatch({type: CREATE_USER, user:{username, password, user_id: user_id}, showForm: false, user_exist: false, loginFail: false})
        dispatch({type: GO_TO_MAIN_PAGE, user_id: user_id, userName: username})
    }
  }
  
  return (
    <div>
        <h1>Creating New User :)</h1>
        <form action="" style={{marginRight: '13rem'}}>
          <label htmlFor="">Username:</label>
          <input onChange={onValueChangeFirstName} value={username} type="text" />

          <label htmlFor="">Password:</label>
          <input onChange={onValueChangeLastName} value={password} type="text" />

          <button onClick={createUser} >Add User</button>
        </form>
        {user_exist? 
          <div>
            <h1>You Alreay Have An Account With Us </h1> 
            <h4>Please Log In Or Create A New Account</h4>
          </div>: null
        }
          
        <button style={{marginRight: '13rem'}} onClick={()=>{dispatch({type:GO_BACK_HOME_FROM_CREATE_ACCOUNT})}}>Go Back</button>
        
    </div>
  )
}
