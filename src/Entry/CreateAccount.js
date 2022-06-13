import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FIRST_NAME,
  CREATE_USER,
  ADD_LAST_NAME,
  GO_BACK_HOME_FROM_CREATE_ACCOUNT,
  USER_EXIST,
  GO_TO_MAIN_PAGE,
  ENTER_USERNAME_PASSWORD
} from "../Store/reducers/actions/actions";
import { v4 as uuidv4 } from "uuid";
import {Button} from 'react-bootstrap'

export const CreateAccount = ({
  _useDispatch = useDispatch,
  _useSelector = useSelector,
  _uuidv4 = uuidv4
}) => {
  const dispatch = _useDispatch();

  let username = _useSelector((state) => state.createStored.username);
  let password = _useSelector((state) => state.createStored.password);
  const users = _useSelector((state) => state.createStored.users);
  const user_exist = _useSelector((state) => state.createStored.user_exist);
  const user_password = _useSelector((state) => state.createStored.user_password);
  console.log(user_password)
  console.log(users)

  function onValueChangeFirstName(event) {
    dispatch({ type: ADD_FIRST_NAME, username: event.target.value });
  }
  function onValueChangeLastName(event) {
    dispatch({ type: ADD_LAST_NAME, password: event.target.value });
  }
  function createUser(event) {
    event.preventDefault();
    if (password && username) {

        for (let i = 0; i < users.length; i++) {
          if (
            users[i].username === username &&
            users[i].password === password
          ) {
            return dispatch({ type: USER_EXIST, user_exist: true });
          }
        }
      
      let user_id = _uuidv4();
      
        dispatch({
          type: CREATE_USER,
          user: { username, password, user_id: user_id },
          showForm: false,
          user_exist: false,
          loginFail: false,
          
        });
      
      return dispatch({ type: GO_TO_MAIN_PAGE, user_id: user_id, userName: username });
    }else{
      dispatch({type: ENTER_USERNAME_PASSWORD, user_password: true})
    }
  }

  return (
    <div className="CreateAccount">
      <div className='CreateAccount-heading'>
        <h1>Creating New User :)</h1>
        <Button
          onClick={() => {
            dispatch({ type: GO_BACK_HOME_FROM_CREATE_ACCOUNT });
          }}
        >
          Go Back
        </Button>
      </div>
      <form >
        <label htmlFor="">Username: </label>
        <input onChange={onValueChangeFirstName} placeholder='First Name' value={username} type="text" />
        <br />
        <label htmlFor="">Password:  &nbsp;</label>
        <input onChange={onValueChangeLastName} placeholder='Last Name' value={password} type="text" />
        
        <Button onClick={createUser}>Add User</Button>
      </form>
      {user_password? (
        <div>
          <h1>Please enter a username and password</h1>
        </div>
      ) : null}
      {user_exist ? (
        <div>
          <h1>You Alreay Have An Account With Us </h1>
          <h4>Please Log In Or Create A New Account</h4>
        </div>
      ) : null}

    </div>
  );
};


