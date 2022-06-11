import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GO_TO_MESSAGES, SENDING_TO } from "../../Store/reducers/actions/actions";
import { DisplayUsers } from "./DisplayUsers";

test('expect the text "USERS ACTIVE to be in an H4"',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) => {
        return fn({
          createStored: {
            users: [{ username: "apple", password: "orange" }],
          },
          homeStored:{
          }
        });
      };
    render(<DisplayUsers _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const heading = screen.getByText('USERS ACTIVE!')
    expect(heading.tagName).toBe('H2')
})

test('expect a button with text "Send Message"',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) => {
        return fn({
          createStored: {
            users: [{ username: "apple", password: "orange" }],
          },
          homeStored:{
          }
        });
      };
    render(<DisplayUsers _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Send Message')
    expect(button.tagName).toBe('BUTTON')
})

test('expect the text "User: apple" to be in a div when users list contains a username apple',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) => {
        return fn({
          createStored: {
            users: [{ username: "apple", password: "orange" }],
          },
          homeStored:{
          }
        });
      };
    render(<DisplayUsers _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const user = screen.getByText('User: apple')
    expect(user.tagName).toBe('DIV')
})

test('expect a button with text "Send Message" to dispatch GO_TO_MESSAGES',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) => {
        return fn({
          createStored: {
            users: [{ username: "apple", password: "orange" }],
          },
          homeStored:{
          }
        });
      };
    render(<DisplayUsers _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Send Message')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: GO_TO_MESSAGES})
})

test('expect a button with text "Send Message" to dispatch SENDING_TO with appropiate state',()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) => {
        return fn({
          createStored: {
            user: {},
            users: [{ username: "apple", password: "orange" }],
          },
          homeStored:{
              user_id: 1234,
              userName: 'john'
          }
        });
      };
    render(<DisplayUsers _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Send Message')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: SENDING_TO, sendTo: {username: 'apple', password: 'orange'}, sendingFrom: {userFromId: 1234, userFromName: 'john' } })
})



