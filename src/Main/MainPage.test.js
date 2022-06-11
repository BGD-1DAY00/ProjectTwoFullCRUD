import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MainPage} from './MainPage'
import { GO_BACK_HOME_FROM_CREATE_ACCOUNT } from '../Store/reducers/actions/actions'


test('expect to display DisplayUsers, CreateThread, DisplayThread, DisplayMessages Components', ()=>{
    const _DisplayUsers =()=> 'a'
    const _CreateThread =()=> 'b'
    const _DisplayThread =()=> 'c'
    const _DisplayMessages=()=>'d'
    const dispatch = jest.fn()
    render(<MainPage _CreateThread={_CreateThread}  _DisplayUsers={_DisplayUsers} _DisplayThread={_DisplayThread} _DisplayMessages={_DisplayMessages} _useDispatch={()=>dispatch} />)
    
    expect(screen.getByText(/a/)).toBeInTheDocument()
    expect(screen.getByText(/b/)).toBeInTheDocument()
    expect(screen.getByText(/c/)).toBeInTheDocument()
    expect(screen.getByText(/d/)).toBeInTheDocument()
})

test('expect to display text "MESSAGES" from the MainPage Component', ()=>{
    const _DisplayUsers =()=> 'hello'
    const _CreateThread =()=> 'abc'
    const _DisplayThread =()=> 'b'
    const _DisplayMessages=()=>'c'
    const dispatch = jest.fn()
    render(<MainPage _CreateThread={_CreateThread}  _DisplayUsers={_DisplayUsers} _DisplayThread={_DisplayThread} _DisplayMessages={_DisplayMessages} _useDispatch={()=>dispatch} />)
    
    expect(screen.getByText('MESSAGES').tagName).toBe('H4')

})
test('expect to display button with text "Log Out" when on the page', ()=>{
    const _DisplayUsers =()=> 'hello'
    const _CreateThread =()=> 'abc'
    const _DisplayThread =()=> 'b'
    const _DisplayMessages=()=>'c'
    const dispatch = jest.fn()
    render(<MainPage _CreateThread={_CreateThread}  _DisplayUsers={_DisplayUsers} _DisplayThread={_DisplayThread} _DisplayMessages={_DisplayMessages} _useDispatch={()=>dispatch} />)
    
    expect(screen.getByText('Log Out').tagName).toBe('BUTTON')

})
test('expect button with text "Log Out" to dispatch GO_BACK_HOME_FROM_CREATE_ACCOUNT when clicked', ()=>{
    const _DisplayUsers =()=> 'hello'
    const _CreateThread =()=> 'abc'
    const _DisplayThread =()=> 'b'
    const _DisplayMessages=()=>'c'
    const dispatch = jest.fn()
    render(<MainPage _CreateThread={_CreateThread}  _DisplayUsers={_DisplayUsers} _DisplayThread={_DisplayThread} _DisplayMessages={_DisplayMessages} _useDispatch={()=>dispatch} />)
    const button = screen.getByText('Log Out')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: GO_BACK_HOME_FROM_CREATE_ACCOUNT })

})