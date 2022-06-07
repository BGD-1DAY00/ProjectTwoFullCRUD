import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_ACCOUNT, LOGIN_USER } from "../Store/reducers/actions/actions";
import { homeStored } from "../Store/reducers/rootReducer";

export const Home = ({store}) => {
  const dispatch = useDispatch(homeStored);


  return (
    <div>
     
        <div style={{ display: "flex", justifyContent: "center", marginRight: '2rem' }}>
          <button style={{background: 'none', padding: '.5rem', borderRadius: '.7rem', marginRight:'.8rem'}} onClick={() => dispatch({ type: CREATE_ACCOUNT })}>
            Create An Account
          </button>
          <h2>OR</h2>
          <button style={{background: 'none', padding: '2rem', borderRadius: '.7rem', marginLeft:'.8rem'}} onClick={() => dispatch({ type: LOGIN_USER })}>Log In</button>
        </div>

    </div>
  );
};
