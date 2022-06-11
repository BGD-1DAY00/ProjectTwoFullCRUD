import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GO_TO_MAIN_PAGE, SENDING_MESSAGE, SEND_MESSAGE } from "../../Store/reducers/actions/actions";
import { Messages } from "../Messages/Messages";


test('expect an H2 tag with text "Send a Message to {username}"',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: 'two',
                message: 'hello'
            }
        })
    }
    const _useDispatch = jest.fn()
    render(<Messages _useDispatch={_useDispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Send a Message to one:').tagName).toBe('H2')
})

test('expect a button with text "Send Home"',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: 'two',
                message: 'hello'
            }
        })
    }
    const _useDispatch = jest.fn()
    render(<Messages _useDispatch={_useDispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Send Home').tagName).toBe('BUTTON')
})

test('expect a button with text "Send Home" ot dispatch GO_TO_MAIN_PAGE',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: 'two',
                message: 'hello'
            }
        })
    }
    const dispatch = jest.fn()
    render(<Messages _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Send Home')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: GO_TO_MAIN_PAGE})
})

test('expect a label with text "Messages:"',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: 'two',
                message: 'hello'
            }
        })
    }
    const _useDispatch = jest.fn()
    render(<Messages _useDispatch={_useDispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Messages:').tagName).toBe('LABEL')
})

test('expect an input with placeholder "send message"',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: 'two',
                message: 'hello'
            }
        })
    }
    const _useDispatch = jest.fn()
    render(<Messages _useDispatch={_useDispatch} _useSelector={_useSelector} />)
    expect(screen.getByPlaceholderText('send message').tagName).toBe('INPUT')
})
test('expect an input with placeholder "send message" to add to the message state as the user types',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: 'two',
                message: 'hello'
            }
        })
    }
    const dispatch = jest.fn()
    render(<Messages _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const input = screen.getByPlaceholderText('send message')
    userEvent.type(input, 'a')
    expect(dispatch).toHaveBeenCalledWith({type:SENDING_MESSAGE, message: 'helloa'})
})

test('expect a button with text "send"',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: 'two',
                message: 'hello'
            }
        })
    }
    const dispatch = jest.fn()
    render(<Messages _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('send')
    expect(button.tagName).toBe('BUTTON')
})

test('expect a button with text "send"',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: 'two',
                message: 'hello'
            }
        })
    }
    const dispatch = jest.fn()
    render(<Messages _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('send')
    expect(button.tagName).toBe('BUTTON')
})

test('expect a button with text "send" to dispatch SEND MESSAGE and BACK TO MAIN PAGE',()=>{
    const _useSelector =(fn)=>{
        return fn({
            messagesReducer:{
                sendTo: {
                    username: 'one'
                },
                sendFrom: {},
                message: 'hello'
            }
        })
    }
    const dispatch = jest.fn()
    render(<Messages _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('send')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: SEND_MESSAGE, message:{message:'hello', sendFrom:{}, sendTo:{username:'one'}}})
})