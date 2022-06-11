import React from "react";
import logo from "../../images/pexels-duophenom-2417848.jpg";
import loginImg from "../../images/pexels-ron-lach-9786304.jpg";
import { Search, Megaphone } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { SEARCHING } from "../../Store/reducers/actions/actions";
export const Nav = ({_useDispatch, _useSelector}) => {
  const dispatch = _useDispatch();
  const search = _useSelector((state) => state.searchReducer.search);
  function searching(e){
      dispatch({type: SEARCHING, search:e.target.value })
      console.log(search)
  }
  return (
    <div className="App">
      <div className="nav">
        <img className="nav-image" src={logo} alt="" />
        <div className="nav-search-input">
          <Search className="nav-search" />
          <input value={search} onChange={(e)=>searching(e)}  className="nav-input" type="text" />
        </div>
        <Megaphone className="nav-megaphone" />
      </div>
    </div>
  );
};
