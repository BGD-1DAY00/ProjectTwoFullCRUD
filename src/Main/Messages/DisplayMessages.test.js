import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import { SENDING_REPLY, SEND_REPLY } from "../../Store/reducers/actions/actions";
import { DisplayMessages } from "./DisplayMessages";

test('expect a div that displays the message,fromName, and fromID properties pulled from the messages array in the messagesReducer',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{
                            user_id: 123
                        },
                        sendFrom: {
                            userFromId: 12,
                            userFromName: 'sam'
                        }
                    },
                    
                ],
                replys: [],
                user_id :123
            },
            homeStored:{
                user_id: 123
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('hello').tagName).toBe('H2')
    expect(screen.getByText('user:sam ID:12').tagName).toBe('H3')
})

test('expect not to show button or input on screen if the messages array length is less than 1',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [                 
                ],
                replys: [],
                user_id :123
            },
            homeStored:{
                user_id: 123
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.queryByText('send')
    expect(button).not.toBeInTheDocument()

    const input = screen.queryByPlaceholderText('send reply')
    expect(input).not.toBeInTheDocument()
})

test('expect an input with placeholder text "send reply" and a button with text "send" when the messages array from messagesReducer is greater than 0',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{
                            user_id: 123
                        },
                        sendFrom: {
                            userFromId: 12,
                            userFromName: 'sam'
                        }
                    },
                    
                ],
                replys: [],
                user_id :123
            },
            homeStored:{
                user_id: 123
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('send').tagName).toBe('BUTTON')
    expect(screen.getByPlaceholderText('send reply').tagName).toBe('INPUT')
})

test('expect input with placeholder text "send reply" to dispatch SENDING_REPLY when user types',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{
                            user_id: 123
                        },
                        sendFrom: {
                            userFromId: 12,
                            userFromName: 'sam'
                        }
                    },
                    
                ],
                replys: [],
                user_id :123,
                reply: 'a'
            },
            homeStored:{
                user_id: 123
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const input = screen.getByPlaceholderText('send reply')
    userEvent.type(input, 'a')
    expect(dispatch).toHaveBeenCalledWith({type: SENDING_REPLY, reply: 'aa'})
})

test('expect button with text "send" to dispatch SEND_REPLY when user clicks',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{
                            user_id: 123
                        },
                        sendFrom: {
                            userFromId: 12,
                            userFromName: 'sam'
                        }
                    },
                    
                ],
                sendFrom: {
                    userFromId: 12,
                    userFromName: 'sam'
                },
                sendTo:{
                    user_id: 123
                },
                replys: [],
                user_id :123,
                reply: 'a',
                message:'hello'
            },
            homeStored:{
                user_id: 123
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('send')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: SEND_REPLY, replys: {message: 'hello',  reply:'a', sendTo:{user_id: 123}, sendFrom: {userFromId: 12,userFromName: 'sam' }}})
})

test('expect button with text "send" to dispatch SEND_REPLY when user clicks',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{
                            user_id: 123
                        },
                        sendFrom: {
                            userFromId: 12,
                            userFromName: 'sam'
                        }
                    },
                    
                ],
                sendFrom: {
                    userFromId: 12,
                    userFromName: 'sam'
                },
                sendTo:{
                    user_id: 123
                },
                replys: [],
                user_id :123,
                reply: 'a',
                message:'hello'
            },
            homeStored:{
                user_id: 123
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('send')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: SEND_REPLY, replys: {message: 'hello',  reply:'a', sendTo:{user_id: 123}, sendFrom: {userFromId: 12,userFromName: 'sam' }}})
})

test('expect an H2 with text "Message Send: hello"',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{},
                        sendFrom: {}
                    },
                    
                ],
                replys: [
                    {
                        reply: 'hi',
                        sendFrom:{
                            userFromId:12
                        },
                        sendTo:{
                            username: 'sam'
                        },
                        message: 'hello'
                    }
                ],
              
            },
            homeStored:{
                user_id: 12
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Message Sent: hello').tagName).toBe('H2')
})

test('expect an H2 with text "hi"',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{},
                        sendFrom: {}
                    },
                    
                ],
                replys: [
                    {
                        reply: 'hi',
                        sendFrom:{
                            userFromId:12
                        },
                        sendTo:{
                            username: 'sam'
                        },
                        message: 'hello'
                    }
                ],
              
            },
            homeStored:{
                user_id: 12
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Reply: hi').tagName).toBe('H2')
})

test('expect an H3 with text "From: sam"',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{},
                        sendFrom: {}
                    },
                    
                ],
                replys: [
                    {
                        reply: 'hi',
                        sendFrom:{
                            userFromId:12
                        },
                        sendTo:{
                            username: 'sam'
                        },
                        message: 'hello'
                    }
                ],
              
            },
            homeStored:{
                user_id: 12
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('From: sam').tagName).toBe('H3')
})
test('expect to not display an H2 with text "Sent:", not to display an H3 with text "Reply: hi", not to display an H3 with text "From: "',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            messagesReducer:{
                messages: [
                    {
                        message: 'hello',
                        sendTo:{},
                        sendFrom: {}
                    },
                    
                ],
                replys: [
                    
                ],
              
            },
            homeStored:{
                user_id: 12
            }
        })
    }
    render(<DisplayMessages _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const messageSentText = screen.queryByPlaceholderText('Message Sent:')
    expect(messageSentText).not.toBeInTheDocument()

    const replyText = screen.queryByPlaceholderText('Reply:')
    expect(replyText).not.toBeInTheDocument()

    const fromText = screen.queryByPlaceholderText('From:')
    expect(fromText).not.toBeInTheDocument()
})
