import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_ACCOUNT, LOGIN_USER } from "../Store/reducers/actions/actions";
import { homeStored } from "../Store/reducers/rootReducer";
import img from '../images/pexels-johannes-plenio-1103970.jpg'
//Users/yorkmacbook065/IdeaProjects/reactProject-2/testpro/src/images/pexels-pixabay-531880.jpg
export const Home = ({_useDispatch}) => {
  const dispatch = _useDispatch();


  return (
    <div className='Home'>
        <div className='parent'>
          <button  onClick={() => dispatch({ type: CREATE_ACCOUNT })}>
            Create An Account
          </button>
          <button onClick={() => dispatch({ type: LOGIN_USER })}>Log In</button>
        </div>

    </div>
  );
};
