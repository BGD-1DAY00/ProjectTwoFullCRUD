import {screen, render} from '@testing-library/react'
import { ADD_FIRST_NAME, ADD_LAST_NAME, BACK_TO_MAIN_PAGE, CREATE_ACCOUNT, CREATE_USER, ENTER_USERNAME_PASSWORD, GO_BACK_HOME_FROM_CREATE_ACCOUNT, GO_TO_EDIT, GO_TO_EDIT_POSTS, GO_TO_MAIN_PAGE, GO_TO_MESSAGES, LOGIN_FAILED, LOGIN_USER, USER_EXIST } from './actions/actions'
import { createStored, homeStored } from './rootReducer'

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