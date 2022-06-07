import {
  LOGIN_USER,
  CREATE_ACCOUNT,
  CREATE_USER,
  ADD_FIRST_NAME,
  ADD_LAST_NAME,
  USER_EXIST,
  SHOW_THREAD,
  GO_TO_MAIN_PAGE,
  GO_TO_EDIT,
  UPDATE_INFO,
  LOGIN_FAILED,
  CREATE_THREAD,
  ADD_THREAD,
  GO_BACK_HOME_FROM_CREATE_ACCOUNT,
  UPDATE_AFTER_DELETE_THREAD,
  ADDING_TO_THREAD,
  BACK_TO_MAIN_PAGE,
  UPDATED_THREAD,
  ADDING_COMMENT,
  ADD_TO_COMMENTS,
  GO_TO_MESSAGES,
  SENDING_TO,
  SENDING_MESSAGE,
  SEND_MESSAGE,
  GO_TO_EDIT_POSTS, 
  EDIT_POST,
  ADDING_TO_UPDATING_COMMENT
} from "./actions/actions";

const homeReducer = {
  pass: true,
  showEntry: true,
  showCreateAccount: false,
  showLogin: false,
  showThread: false,
  showEdit: false,
  user_id: null,
  userName: null,
  showMessages: false,
  showEditPosts: true
  
};

export function homeStored(state = homeReducer, action) {
    switch (action?.type) {
        case LOGIN_USER:return {
            ...state,
            pass: false,
            showLogin: true,
            showCreateAccount: false,
  
        };
        case CREATE_ACCOUNT:return {
            ...state,
            pass: false,
            showCreateAccount: true
      };
      case GO_BACK_HOME_FROM_CREATE_ACCOUNT:return{
        ...state,
        pass: true,
        showLogin:false,
        showCreateAccount: false,
        user_id:null
      }
      case GO_TO_MAIN_PAGE: return{
        ...state,
        pass: false,
        showLogin: false,
        showCreateAccount: false,
        showThread: true,
        user_id:action.user_id,
        userName: action.userName
      }
      case GO_TO_EDIT: return{
        ...state,
        pass: false,
        showLogin: false,
        showCreateAccount: false,
        showThread: false,
        showEdit: true
      }
      case BACK_TO_MAIN_PAGE: return{
        ...state,
        pass: false,
        showLogin: false,
        showCreateAccount: false,
        showThread: true,
        showEdit: false
      }
      case GO_TO_MESSAGES: return{
        ...state,
        pass: false,
        showLogin: false,
        showCreateAccount: false,
        showThread: false,
        showEdit: false,
        showMessages: true
      }
      case GO_TO_EDIT_POSTS: return{
        ...state,
        pass: false,
        showLogin: false,
        showCreateAccount: false,
        showThread: false,
        showEdit: false,
        showMessages: false,
        showEditPosts: true
      }
      default:return {
          ...state,
        };
    }
}

const createLoginReducer = {
  username: "",
  password: "",
  showForm: true,
  user_exist: false,
  login_user_exist: false,
  login_failed: false,
  users: [],
};
export function createStored(state = createLoginReducer, action) {
    switch (action?.type) {
        case ADD_FIRST_NAME:return {
        ...state,
        username: action.username,
      };
    case ADD_LAST_NAME:return {
        ...state,
        password: action.password,
      }
    case CREATE_USER:return {
        ...state,
        users: [...state.users, action.user],
        showForm: action.showForm,
        password: '',
        username: '',
        user_exist: action.user_exist,
        login_failed: action.loginFail,
        login_user_exist: false
      };
    case USER_EXIST: return{
        ...state,
        user_exist: action.user_exist,
        login_failed: action.loginFail,
        username: '',
        password: '',
        login_user_exist: action.login_user_exist
    }
    case LOGIN_FAILED: return{
      ...state,
      login_failed: action.loginFail,
      password: '',
      username: '',
      login_user_exist: action.login_user_exist


    }
    default:return {
        ...state,
      };
  }
}
const initalThread ={
  thread: '',
  allThreads: []
}

export function mainThread(state = initalThread, action){
  switch(action?.type){
    case CREATE_THREAD: return{
      ...state,
      thread: action.thread
    }
    case ADD_THREAD: return{
      ...state,
      allThreads: [...state.allThreads, action.threadInfo]
    }
    case UPDATE_AFTER_DELETE_THREAD: return{
      ...state,
      allThreads: [...action.updatedThreads]
    }
    case UPDATED_THREAD: return{
      ...state,
      allThreads: action.allThreads
    }
    default: return{
      ...state
    }
  } 
}
const editThreadInit ={
  valToUpdate : null,
  newThread: '',
  comment: '',
  comments: [],
  post: false,
  postToEdit: null,
  updatedComment: ''

}
export function editThreadReducer(state = editThreadInit, action){
  switch(action.type){
    case UPDATE_INFO:return{
      ...state,
      valToUpdate: action.package
    }
    case ADDING_TO_THREAD: return{
      ...state,
      newThread: action.newThread
    }
    case ADDING_COMMENT: return{
      ...state,
      comment: action.comment,
      post: action.post
    }
    case ADD_TO_COMMENTS: return{
      ...state,
      comments: [...state.comments, action.comment],
      comment: '', 
      post: action.post
    }
    case EDIT_POST: return {
      ...state,
      postToEdit: action.post
    }
    case ADDING_TO_UPDATING_COMMENT: return{
      ...state,
      updatedComment: action.comment
    }
    default: return{...state}
  }
}

const initMessages= {
  sendTo: null,
  sendingFrom: null,
  message: '',
  messages:[]
}

export function messagesReducer(state = initMessages, action){
  switch(action.type){
    case SENDING_TO: return{
      ...state, 
      sendTo: action.sendTo,
      sendFrom: action.sendingFrom
    }
    case SENDING_MESSAGE: return{
      ...state,
      message: action.message
    }
    case SEND_MESSAGE: return{
      ...state,
      messages: [...state.messages, action.message]
    }

    default: return{
      ...state
    }

  }
}