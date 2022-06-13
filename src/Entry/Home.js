import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_ACCOUNT, LOGIN_USER } from "../Store/reducers/actions/actions";
import { homeStored } from "../Store/reducers/rootReducer";
import img from '../images/pexels-johannes-plenio-1103970.jpg'
import {Button} from  'react-bootstrap'

export const Home = ({_useDispatch}) => {
  const dispatch = _useDispatch();


  return (
    <div className='Home'>
        <div className='parent'>
          <Button  onClick={() => dispatch({ type: CREATE_ACCOUNT })}>
            Create An Account
          </Button>
          <Button onClick={() => dispatch({ type: LOGIN_USER })}>Log In</Button>
        </div>

    </div>
  );
};
