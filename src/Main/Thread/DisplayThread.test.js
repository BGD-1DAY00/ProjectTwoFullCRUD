import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastBody } from "react-bootstrap";
import { GO_TO_EDIT, UPDATE_AFTER_DELETE_THREAD, UPDATE_INFO } from "../../Store/reducers/actions/actions";
import { homeStored } from "../../Store/reducers/rootReducer";
import { DisplayThread } from "./DisplayThread";

test("expect a heading2 with text Adam when state exists as described", () => {
  const dispatch = jest.fn();
  const Comment = ()=> 'hello'
  const _useSelector = (fn) => {
    return fn({
      mainThread: {
        allThreads: [
          {
            created_by: 12345,
            thread: "adam",
            thread_id: 123,
            date: 123,
            user: "john",
          }],
      },
      homeStored:{
          user_id: 12345
      }
    });
  };
  render(<DisplayThread _Comment={Comment} _useDispatch={()=>dispatch} _useSelector={_useSelector} />);
  const headingTwo = screen.getByText('Title: adam')
  expect(headingTwo.tagName).toBe('H2')
});

test("expect two button with text Edit and Delete if the created_by id of the thread and the user_id of the user logged in are the same", () => {
    const dispatch = jest.fn();
    const Comment = ()=> 'hello'
    const _useSelector = (fn) => {
      return fn({
        mainThread: {
          allThreads: [
            {
              created_by: 12345,
              thread: "adam",
              thread_id: 123,
              date: 123,
              user: "john",
            }],
        },
        homeStored:{
            user_id: 12345
        }
      });
    };
    render(<DisplayThread _Comment={Comment} _useDispatch={()=>dispatch} _useSelector={_useSelector} />);
    const button = screen.getByText('Edit')
    expect(button.tagName).toBe('BUTTON')
    const buttonTwo = screen.getByText('Delete')
    expect(buttonTwo.tagName).toBe('BUTTON')
  });

  test("expect with text Edit to dispatch UPDATE_INFO and GO_TO_EDIT", () => {
    const dispatch = jest.fn();
    const Comment = ()=> 'hello'
    const _useSelector = (fn) => {
      return fn({
        mainThread: {
          allThreads: [
            {
              created_by: 12345,
              thread: "adam",
              thread_id: 123,
              date: 123,
              user: "john",
            }],
        },
        homeStored:{
            user_id: 12345
        }
      });
    };
    render(<DisplayThread _Comment={Comment} _useDispatch={()=>dispatch} _useSelector={_useSelector} />);

    //button with UPDATE_INFO DISPATCH
    const button = screen.getByText('Edit')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_INFO, package: {created_by: 12345,thread: "adam",thread_id: 123,date: 123,user: "john"}})

    //button with GO_TO_EDIT DISPATCH
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: GO_TO_EDIT})
  });

  test("expect with button with Delete text to dispatch UPDATE_AFTER_DELETE_THREAD, with an emptey array as the thread id of the val and thread id are the same", () => {
    const dispatch = jest.fn();
    const Comment = ()=> 'hello'
    const _useSelector = (fn) => {
      return fn({
        mainThread: {
          allThreads: [
            {
              created_by: 12345,
              thread: "adam",
              thread_id: 123,
              date: 123,
              user: "john",
            }],
        },
        homeStored:{
            user_id: 12345
        }
      });
    };
    render(<DisplayThread _Comment={Comment} _useDispatch={()=>dispatch} _useSelector={_useSelector} />);

    //button with  UPDATE_AFTER_DELETE_THREAD
    //  we are pressing on this current object as that is the state we have provided otherwise it would not work highlighted belwo
    const button = screen.getByText('Delete')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_AFTER_DELETE_THREAD, updatedThreads: []})

  });
  test("expect the button with text delete to dispatch UPDATE_AFTER_DELETE_THREAD with one array object", () => {
    const dispatch = jest.fn();
    const Comment = ()=> 'hello'
    const _useSelector = (fn) => {
      return fn({
        mainThread: {
          allThreads: [
            {
              created_by: 12345,
              thread: "adam",
              thread_id: 123,
              date: 123,
              user: "john",
            },
            {
                created_by: 12346,
                thread: "kyle",
                thread_id: 124,
                date: 124,
                user: "Miller",
              },
        ],
        },
        homeStored:{
            user_id: 12345
        }
      });
    };
    render(<DisplayThread _Comment={Comment} _useDispatch={()=>dispatch} _useSelector={_useSelector} />);

    //button with  UPDATE_AFTER_DELETE_THREAD
    const button = screen.getByText('Delete')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATE_AFTER_DELETE_THREAD, updatedThreads: [{created_by: 12346,thread: "kyle",thread_id: 124,date: 124,user: "Miller",}]})

  });


  test("expect three p tags with text showing the created_by id of the user; the thread_id of the thread; p tag showing the date created pulled from the state", () => {
    const dispatch = jest.fn();
    const Comment = ()=> 'hello'
    const _useSelector = (fn) => {
      return fn({
        mainThread: {
          allThreads: [
            {
              created_by: '12345',
              thread: "adam",
              thread_id: 123,
              date: 123,
              user: "john",
            }],
        },
        homeStored:{
            user_id: 12345
        }
      });
    };
    render(<DisplayThread _Comment={Comment} _useDispatch={()=>dispatch} _useSelector={_useSelector} />);
    const createdBy = screen.getByText('UserID: 12345')
    expect(createdBy.tagName).toBe('P')

    const threadID = screen.getByText('ThreadID: 123')
    expect(threadID.tagName).toBe('P')

    const date = screen.getByText('123')
    expect(date.tagName).toBe('P')
  });

  test('expect to display text "Username: john" in the DisplayThread Component',()=>{
    const dispatch = jest.fn();
    const Comment = ()=> 'hello'
    const _useSelector = (fn) => {
      return fn({
        mainThread: {
          allThreads: [
            {
              created_by: '12345',
              thread: "adam",
              thread_id: 123,
              date: 123,
              user: "john",
            }],
        },
        homeStored:{
            user_id: 12345
        }
      });
    };
    render(<DisplayThread _Comment={Comment} _useDispatch={()=>dispatch} _useSelector={_useSelector} />);
    const headingThree = screen.getByText('Username: john')
    expect(headingThree.tagName).toBe('H3')
  })

  test('expect to display "hello" ensuring the display of the Comment Comoponent',()=>{
    const dispatch = jest.fn();
    const Comment = ()=> 'hello'
    const _useSelector = (fn) => {
      return fn({
        mainThread: {
          allThreads: [
            {
              created_by: '12345',
              thread: "adam",
              thread_id: 123,
              date: 123,
              user: "john",
            }],
        },
        homeStored:{
            user_id: 12345
        }
      });
    };
    render(<DisplayThread _Comment={Comment} _useDispatch={()=>dispatch} _useSelector={_useSelector} />);
    const comment = screen.getByText('hello')
    expect(comment.tagName).toBe('DIV')
  })

  
