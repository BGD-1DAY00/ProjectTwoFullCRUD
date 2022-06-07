import { useSelector } from 'react-redux';
import './App.css';
import { CreateAccount } from './Entry/CreateAccount';
import {Home} from './Entry/Home.js'
import { Login } from './Entry/Login';
import { EditThread } from './Main/EditThread/EditThread';
import { MainPage } from './Main/MainPage';
import {Messages} from './Main/Messages/Messages'
import {pass, showCreateAccount, showLogin, showThread, showEdit, showMessages} from './AppStates'
import { EditComments } from './Main/Comments/EditComments';


function App({_Home = Home, _useSelector = useSelector, _CreateAccount = CreateAccount, _Login = Login, _EditThread= EditThread, _MainPage= MainPage, _Messages=Messages }) {
  const pass = _useSelector(state=>state.homeStored.pass)
  const showCreateAccount = _useSelector(state=>state.homeStored.showCreateAccount)
  const showLogin =  _useSelector(state=> state.homeStored.showLogin)
  const showThread = _useSelector(state=> state.homeStored.showThread)
  const showEdit = _useSelector(state=> state.homeStored.showEdit)
  const showMessages = _useSelector(state=> state.homeStored.showMessages)
  const showEditPosts = _useSelector(state=> state.homeStored.showEditPosts)

  if(pass){
    return (
      <div className='App'>
        <h1 style={{textAlign: 'center'}}>Welcome to the Reddit Kind-OF?</h1>
        <_Home />
    </div>
    )
  }
  if(showCreateAccount){
    return (
      <div className='App'>
        <h1>Welcome to the Reddit Kind-OF?</h1>
        <_CreateAccount />
    </div>
    )
  }
  if(showLogin){
    return (
      <div className='App'>
        <h1>Welcome to the Reddit Kind-OF?</h1>
        <_Login />
    </div>
    )
  }
  if(showThread){
    return (
      <div className='App'>
        <h1>Welcome to the Reddit Kind-OF?</h1>
        <_MainPage />
    </div>
    )
  }
  if(showEdit){
    return (
      <div className='App'>
        <h1>Welcome to the Reddit Kind-OF?</h1>
        <_EditThread />
    </div>
    )
  }
  if(showMessages){
    return (
      <div className='App'>
        <h1>Welcome to the Reddit Kind-OF?</h1>
        <_Messages />
    </div>
    )
  }
  if(showEditPosts){
    return (
      <div className='App'>
        <h1>Welcome to the Reddit Kind-OF?</h1>
        <EditComments />
    </div>
    )
  }
}
  

export default App;
