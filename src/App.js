import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CreateAccount } from "./Entry/CreateAccount";
import { Home } from "./Entry/Home.js";
import { Login } from "./Entry/Login";
import { EditThread } from "./Main/EditThread/EditThread";
import { MainPage } from "./Main/MainPage";
import { Messages } from "./Main/Messages/Messages";
import { EditComments } from "./Main/Comments/EditComments";
import img from "./images/pexels-hasan-albari-1229861.jpg";
import loginImg from "./images/pexels-ron-lach-9786304.jpg";
import { TrendingPanel } from "./Additions/TrendingPanel/TrendingPanel";
import { Nav } from "./Additions/TrendingPanel/Nav";

function App({
  _Home = Home,
  _useSelector = useSelector,
  _CreateAccount = CreateAccount,
  _Login = Login,
  _EditThread = EditThread,
  _MainPage = MainPage,
  _Messages = Messages,
  _Nav = Nav,
  _TrendingPanel = TrendingPanel,
  _useDispatch = useDispatch,
}) {
  const pass = _useSelector((state) => state.homeStored.pass);
  const showCreateAccount = _useSelector(
    (state) => state.homeStored.showCreateAccount
  );
  const showLogin = _useSelector((state) => state.homeStored.showLogin);
  const showThread = _useSelector((state) => state.homeStored.showThread);
  const showEdit = _useSelector((state) => state.homeStored.showEdit);
  const showMessages = _useSelector((state) => state.homeStored.showMessages);
  const showEditPosts = _useSelector((state) => state.homeStored.showEditPosts);

  if (pass) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome To Reddit Kind OF?</h1>
        <div className="App AppOne">
          <_Nav _useSelector={_useSelector} _useDispatch={_useDispatch} />
          <div className="App-Home">
            <_Home _useDispatch={_useDispatch} />
          </div>
        </div>
        <_TrendingPanel _useSelector={_useSelector} _useDispatch={_useDispatch} />
      </div>
    );
  }
  if (showCreateAccount) {
    return (
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Welcome to the Reddit Kind-OF?
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <img style={{ width: "30rem" }} src={img} alt="" />
          <_CreateAccount />
        </div>
      </div>
    );
  }
  if (showLogin) {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Welcome to the Reddit Kind-OF?</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <img
            style={{
              width: "20rem",
              paddingRight: "3rem",
              borderRadius: "3rem",
            }}
            src={loginImg}
            alt=""
          />
          <_Login _useDispatch= {_useDispatch} _useSelector={_useSelector} />
        </div>
      </div>
    );
  }
  if (showThread) {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Welcome to the Reddit Kind-OF?</h1>
        <_MainPage _useDispatch= {_useDispatch} _useSelector={_useSelector} />
      </div>
    );
  }
  if (showEdit) {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Welcome to the Reddit Kind-OF?</h1>
        <_EditThread />
      </div>
    );
  }
  if (showMessages) {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Welcome to the Reddit Kind-OF?</h1>
        <_Messages />
      </div>
    );
  }
  if (showEditPosts) {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Welcome to the Reddit Kind-OF?</h1>
        <EditComments />
      </div>
    );
  }
}

export default App;
