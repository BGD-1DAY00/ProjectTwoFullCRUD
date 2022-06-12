import {screen, render} from '@testing-library/react'
import { ADDING_COMMENT, ADDING_TO_THREAD, ADDING_TO_UPDATING_COMMENT, ADD_FIRST_NAME, ADD_LAST_NAME, ADD_THREAD, ADD_TO_COMMENTS, BACK_TO_MAIN_PAGE, CREATE_ACCOUNT, CREATE_THREAD, CREATE_USER, EDIT_POST, ENTER_USERNAME_PASSWORD, GO_BACK_HOME_FROM_CREATE_ACCOUNT, GO_TO_EDIT, GO_TO_EDIT_POSTS, GO_TO_MAIN_PAGE, GO_TO_MESSAGES, HOLD_DATA, LOGIN_FAILED, LOGIN_USER, SEARCHING, SENDING_MESSAGE, SENDING_REPLY, SEND_MESSAGE, SEND_REPLY, UPDATED_THREAD, UPDATE_AFTER_DELETE_THREAD, UPDATE_AFTER_DELTE_COMMENT, UPDATE_EDIT_COMMENTS, UPDATE_INFO, UPDATING_COMMENT, USER_EXIST } from './actions/actions'
import { createStored, editThreadReducer, homeStored, mainThread, messagesReducer, searchReducer } from './rootReducer'

test('expect homeStored to init to the correct state', ()=>{
    const state = homeStored()
    expect(state).toStrictEqual({
        pass: true, //should be true
        showEntry: true, //should be true
        showCreateAccount: false, //false
        showLogin: false, //false
        showThread: false, //false
        showEdit: false, //false
        user_id: null, //null
        userName: null, //null
        showMessages: false, //false
        showEditPosts: true, //true
    })
})

test('expect homeStored init to change when action LOGIN_USER is dispatched', ()=>{
    const initstate = homeStored()
    const state = homeStored(initstate,{type: LOGIN_USER})
    expect(state).toStrictEqual({
        pass: false, //should be true
        showEntry: true, //should be true
        showCreateAccount: false, //false
        showLogin: true, //false
        showThread: false, //false
        showEdit: false, //false
        user_id: null, //null
        userName: null, //null
        showMessages: false, //false
        showEditPosts: true, //true
    })
})
test('expect homeStored init to change when action CREATE_ACCOUNT is dispatched', ()=>{
    const initstate = homeStored()
    const state = homeStored(initstate,{type: CREATE_ACCOUNT})
    expect(state).toStrictEqual({
        pass: false, //should be true
        showEntry: true, //should be true
        showCreateAccount: true, //false
        showLogin: false, //false
        showThread: false, //false
        showEdit: false, //false
        user_id: null, //null
        userName: null, //null
        showMessages: false, //false
        showEditPosts: true, //true
    })
})
test('expect homeStored init to change when action GO_BACK_HOME_FROM_CREATE_ACCOUNT is dispatched', ()=>{
    const initstate = homeStored()
    const state = homeStored(initstate,{type: GO_BACK_HOME_FROM_CREATE_ACCOUNT})
    expect(state).toStrictEqual({
        pass: true, //should be true
        showEntry: true, //should be true
        showCreateAccount: false, //false
        showLogin: false, //false
        showThread: false, //false
        showEdit: false, //false
        user_id: null, //null
        userName: null, //null
        showMessages: false, //false
        showEditPosts: true, //true
    })
})
test('expect homeStored init to change when action GO_TO_MAIN_PAGE is dispatched', ()=>{
    const initstate = homeStored()
    const state = homeStored(initstate,{type: GO_TO_MAIN_PAGE, user_id: 12, userName: 'sam'})
    expect(state).toStrictEqual({
        pass: false, //should be true
        showEntry: true, //should be true
        showCreateAccount: false, //false
        showLogin: false, //false
        showThread: true, //false
        showEdit: false, //false
        user_id: 12, //null
        userName: 'sam', //null
        showMessages: false, //false
        showEditPosts: true, //true
    })
})

test('expect homeStored init to change when action GO_TO_EDIT is dispatched', ()=>{
    const initstate = homeStored()
    const state = homeStored(initstate,{type: GO_TO_EDIT})
    expect(state).toStrictEqual({
        pass: false, //should be true
        showEntry: true, //should be true
        showCreateAccount: false, //false
        showLogin: false, //false
        showThread: false, //false
        showEdit: true, //false
        user_id: null, //null
        userName: null, //null
        showMessages: false, //false
        showEditPosts: true, //true
    })
})
test('expect homeStored init to change when action BACK_TO_MAIN_PAGE is dispatched', ()=>{
    const initstate = homeStored()
    const state = homeStored(initstate,{type: BACK_TO_MAIN_PAGE})
    expect(state).toStrictEqual({
        pass: false, //should be true
        showEntry: true, //should be true
        showCreateAccount: false, //false
        showLogin: false, //false
        showThread: true, //false
        showEdit: false, //false
        user_id: null, //null
        userName: null, //null
        showMessages: false, //false
        showEditPosts: true, //true
    })
})
test('expect homeStored init to change when action GO_TO_MESSAGES is dispatched', ()=>{
    const initstate = homeStored()
    const state = homeStored(initstate,{type: GO_TO_MESSAGES})
    expect(state).toStrictEqual({
        pass: false, //should be true
        showEntry: true, //should be true
        showCreateAccount: false, //false
        showLogin: false, //false
        showThread: false, //false
        showEdit: false, //false
        user_id: null, //null
        userName: null, //null
        showMessages: true, //false
        showEditPosts: true, //true
    })
})
test('expect homeStored init to change when action GO_TO_EDIT_POSTS is dispatched', ()=>{
    const initstate = homeStored()
    const state = homeStored(initstate,{type: GO_TO_EDIT_POSTS})
    expect(state).toStrictEqual({
        pass: false, //should be true
        showEntry: true, //should be true
        showCreateAccount: false, //false
        showLogin: false, //false
        showThread: false, //false
        showEdit: false, //false
        user_id: null, //null
        userName: null, //null
        showMessages: false, //false
        showEditPosts: true, //true
    })
})


test('expect createStored to init to the correct state', ()=>{
    const state = createStored()
    expect(state).toStrictEqual({
        username: "",
        password: "",
        showForm: true,
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        users: [],
        user_password: false
    })
})
test('expect createStored init to change when action ADD_FIRST_NAME is dispatched', ()=>{
    const initstate = createStored()
    const state = createStored(initstate,{type: ADD_FIRST_NAME, username: 'saad'})
    expect(state).toStrictEqual({
        username: "saad",
        password: "",
        showForm: true,
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        users: [],
        user_password: false
    })
})
test('expect createStored init to change when action ADD_LAST_NAME is dispatched', ()=>{
    const initstate = createStored()
    const state = createStored(initstate,{type: ADD_LAST_NAME, password: 'saad'})
    expect(state).toStrictEqual({
        username: "",
        password: "saad",
        showForm: true,
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        users: [],
        user_password: false
    })
})
test('expect createStored init to change when action CREATE_USER is dispatched', ()=>{
    const initstate = createStored()
    const state = createStored(initstate,{type: CREATE_USER, user: {one: 1} , user_exist: false, loginFail: false, showForm: true})
    expect(state).toStrictEqual({
        username: "",
        password: "",
        showForm: true,
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        users: [{one: 1}],
        user_password: false
    })
})
test('expect createStored init to change when action USER_EXIST is dispatched', ()=>{
    const initstate = createStored()
    const state = createStored(initstate,{type: USER_EXIST, password: '', username: '', showFrom:true, user_exist: false, loginFail: false, login_user_exist: false})
    expect(state).toStrictEqual({
        username: "",
        password: "",
        showForm: true,
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        users: [],
        user_password: false
    })
})

test('expect createStored init to change when action LOGIN_FAILED is dispatched', ()=>{
    const initstate = createStored()
    const state = createStored(initstate,{type: LOGIN_FAILED, password: '', username: '', loginFail: false, login_user_exist: false})
    expect(state).toStrictEqual({
        username: "",
        password: "",
        showForm: true,
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        users: [],
        user_password: false
    })
})

test('expect createStored init to change when action ENTER_USERNAME_PASSWORD is dispatched', ()=>{
    const initstate = createStored()
    const state = createStored(initstate,{type: ENTER_USERNAME_PASSWORD, user_password: 'hello'})
    expect(state).toStrictEqual({
        username: "",
        password: "",
        showForm: true,
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        users: [],
        user_password: 'hello'
    })
})

test('expect mainThread to init to the correct state', ()=>{
    const state = mainThread()
    expect(state).toStrictEqual({
        thread: "",
        allThreads: [],
        updatedObj: null
    })
})
test('expect mainThread init to change when action CREATE_THREAD is dispatched', ()=>{
    const initState = mainThread()
    const state = mainThread(initState, {type: CREATE_THREAD, thread: 'hello'})
    expect(state).toStrictEqual({
        thread: "hello",
        allThreads: [],
        updatedObj: null
    })
})
test('expect mainThread init to change when action ADD_THREAD is dispatched', ()=>{
    const initState = mainThread()
    const state = mainThread(initState, {type: ADD_THREAD, threadInfo:{here: 'one'}})
    expect(state).toStrictEqual({
        thread: "",
        allThreads: [{here: 'one'}],
        updatedObj: null
    })
})
test('expect mainThread init to change when action UPDATE_AFTER_DELETE_THREAD is dispatched', ()=>{
    const initState = mainThread()
    const state = mainThread(initState, {type: UPDATE_AFTER_DELETE_THREAD, updatedThreads:[{here: 'one'}]})
    expect(state).toStrictEqual({
        thread: "",
        allThreads: [...[{here: 'one'}]],
        updatedObj: null
    })
})
test('expect mainThread init to change when action UPDATED_THREAD is dispatched', ()=>{
    const initState = mainThread()
    const state = mainThread(initState, {type: UPDATED_THREAD, updatedObj: {one: 'one'}, allThreads: [{here: 'one'}]})
    expect(state).toStrictEqual({
        thread: "",
        allThreads: [...[{here: 'one'}], {one: 'one'}],
        updatedObj: {one:'one'}
    })
})

test('expect editThreadReducer to equal init state', ()=>{
    const state = editThreadReducer()
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "",
        comment: "",
        comments: [],
        post: false,
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: null,
        array: null
    })
})

test('expect editThreadReducer init to change when action UPDATE_INFO is dispatched', ()=>{
    const initState = editThreadReducer()
    const state = editThreadReducer(initState, {type: UPDATE_INFO, package: 'hello'})
    expect(state).toStrictEqual({
        valToUpdate: 'hello',
        newThread: "",
        comment: "",
        comments: [],
        post: false,
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: null,
        array: null
    })
})

test('expect editThreadReducer init to change when action ADDING_TO_THREAD is dispatched', ()=>{
    const initState = editThreadReducer()
    const state = editThreadReducer(initState, {type: ADDING_TO_THREAD, newThread: 'hello'})
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "hello",
        comment: "",
        comments: [],
        post: false,
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: null,
        array: null
    })
})

test('expect editThreadReducer init to change when action ADDING_COMMENT is dispatched', ()=>{
    const initState = editThreadReducer()
    const state = editThreadReducer(initState, {type: ADDING_COMMENT, comment: 'hello', post: 'hello'})
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "",
        comment: "hello",
        comments: [],
        post: 'hello',
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: null,
        array: null
    })
})

test('expect editThreadReducer init to change when action ADD_TO_COMMENTS is dispatched', ()=>{
    const initState = editThreadReducer()
    const state = editThreadReducer(initState, {type: ADD_TO_COMMENTS, comment: 'hello', comment_id: 1234 , post: 'hello'})
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "",
        comment: "",
        comments: [{comment: 'hello', comment_id: 1234}],
        post: 'hello',
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: null,
        array: null
    })
})

test('expect editThreadReducer init to change when action EDIT_POST is dispatched', ()=>{
    const initState = editThreadReducer()
    const state = editThreadReducer(initState, {type: EDIT_POST, post: 'hello'})
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "",
        comment: "",
        comments: [],
        post: false,
        postToEdit: 'hello',
        updatedComment: "",
        filteredArr: null,
        updatedObj: null,
        array: null
    })
})

test('expect editThreadReducer init to change when action UPDATING_COMMENT is dispatched', ()=>{
    const initState = editThreadReducer()
    const state = editThreadReducer(initState, {type: UPDATING_COMMENT, comment: 'hello'})
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "",
        comment: "",
        comments: [],
        post: false,
        postToEdit: null,
        updatedComment: "hello",
        filteredArr: null,
        updatedObj: null,
        array: null
    })
})

test('expect editThreadReducer init to change when action ADDING_TO_UPDATING_COMMENT is dispatched', ()=>{
    const initState = editThreadReducer()
    const state = editThreadReducer(initState, {type: ADDING_TO_UPDATING_COMMENT, array: 'hello',objToUpdate: 'hello'})
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "",
        comment: "",
        comments: [],
        post: false,
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: 'hello',
        array: 'hello'
    })
})

test('expect editThreadReducer init to change when action UPDATE_EDIT_COMMENTS is dispatched', ()=>{
    const editThreadInit = {
        valToUpdate: null,
        newThread: "",
        comment: "",
        comments: [],
        post: false,
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: {greet: 'hello'},
        array: [{greet: 'hello'}, {greet:'hello'}]
      };
    const initState = editThreadReducer()
    const state = editThreadReducer(editThreadInit, {type: UPDATE_EDIT_COMMENTS})
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "",
        comment: "",
        comments: [...[{greet: 'hello'}, {greet:'hello'}], {greet: 'hello'}],
        post: false,
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: null,
        array:  [{greet: 'hello'}, {greet:'hello'}]
    })
})

test('expect editThreadReducer init to change when action UPDATE_AFTER_DELTE_COMMENT is dispatched', ()=>{
    const initState = editThreadReducer()
    const state = editThreadReducer(initState, {type: UPDATE_AFTER_DELTE_COMMENT, comments: ['hello', 'bye']})
    expect(state).toStrictEqual({
        valToUpdate: null,
        newThread: "",
        comment: "",
        comments: ['hello', 'bye'],
        post: false,
        postToEdit: null,
        updatedComment: "",
        filteredArr: null,
        updatedObj: null,
        array: null
    })
})

test('expect messageReducer init to the correct state', ()=>{
    const initState = messagesReducer()
    expect(initState).toStrictEqual({
        sendTo: null,
        sendingFrom: null,
        message: "",
        messages: [],
        reply: "",
        replys: [],
    })
})

test('expect messageReducer init to change when action SENDING_MESSAGE is dispatched', ()=>{
    const initState = messagesReducer()
    const state = messagesReducer(initState, {type: SENDING_MESSAGE, message: 'hello'})
    expect(state).toStrictEqual({
        sendTo: null,
        sendingFrom: null,
        message: "hello",
        messages: [],
        reply: "",
        replys: [],
    })
})

test('expect messageReducer init to change when action SEND_MESSAGE is dispatched', ()=>{
    const initMessages = {
        sendTo: null,
        sendingFrom: null,
        message: "",
        messages: ['hello'],
        reply: "",
        replys: [],
      };
    const state = messagesReducer(initMessages, {type: SEND_MESSAGE, message: 'hello'})
    expect(state).toStrictEqual({
        sendTo: null,
        sendingFrom: null,
        message: "",
        messages: [...['hello'], 'hello'],
        reply: "",
        replys: [],
    })
})

test('expect messageReducer init to change when action SENDING_REPLY is dispatched', ()=>{
    const initState = messagesReducer()
    const state = messagesReducer(initState, {type: SENDING_REPLY, reply: 'hello'})
    expect(state).toStrictEqual({
        sendTo: null,
        sendingFrom: null,
        message: "",
        messages: [],
        reply: "hello",
        replys: [],
    })
})
test('expect messageReducer init to change when action SEND_REPLY is dispatched', ()=>{
    const initMessages = {
        sendTo: null,
        sendingFrom: null,
        message: "",
        messages: [],
        reply: "",
        replys: ['hello'],
      };
    const state = messagesReducer(initMessages, {type: SEND_REPLY, replys: ['hello']})
    expect(state).toStrictEqual({
        sendTo: null,
        sendingFrom: null,
        message: "",
        messages: [],
        reply: "",
        replys: [...['hello'], ['hello']],
    })
})


test('expect searchReducer to equal init state', ()=>{
    const state = searchReducer()
    expect(state).toStrictEqual({
        search: "",
        data:[]
    })
})

test('expect searchReducer init to change when action SEARCHING is dispatched', ()=>{
    const init = searchReducer()
    const state = searchReducer(init, {type: SEARCHING, search:'hello'})
    expect(state).toStrictEqual({
        search: "hello",
        data:[]
    })
})

test('expect searchReducer init to change when action HOLD_DATA is dispatched', ()=>{
    const init = {
        search: "",
        data:['hello']
    }
    const state = searchReducer(init, {type: HOLD_DATA, data:['bye']})
    expect(state).toStrictEqual({
        search: "",
        data:[...['hello'], ...['bye']]
    })
})

