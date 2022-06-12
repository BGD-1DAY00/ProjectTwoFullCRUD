import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ADDING_COMMENT, ADD_TO_COMMENTS, EDIT_POST, GO_TO_EDIT_POSTS } from "../../Store/reducers/actions/actions";
import {Comment} from './Comment'

test('expect an h4 tag with the text "Comments:" ', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 'john'}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: {comment: 'bye', date: '1234', thread_id: 123, user: 'john'}}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Comments:').toggleAttribute('H4'))
})
test('expect an h2 tag with a comment; ensuring to only display said comment when thread_id is equal to the thread_id of the comment', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 747}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('bye').tagName).toBe('H2')
})

test('expect a button with text Edit when the userID(homestored) is the same as the userID on the comment(comments array)', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 1234}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Edit')
    expect(button.tagName).toBe('BUTTON')
})
test('expect a button with text Edit when the userID(homestored) is the same as the userID on the comment(comments array); it should dispatch GO_TO_EDIT_POSTS', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 1234}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Edit')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: GO_TO_EDIT_POSTS})
})
test('expect a button with text Edit when the userID(homestored) is the same as the userID on the comment(comments array); it should dispatch EDIT_POST ', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 1234}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Edit')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_POST, post: {comment:{comment: 'bye', date: '1234', thread_id: 123, user: 1234}}})
})
test('expect not to display a button with text Edit when the userID(homestored) is not the same as the userID on the comment(comments array)', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 1234}}]
            },
            homeStored:{
                user_id: 12345//different
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.queryByText('Edit')
    expect(button).not.toBeInTheDocument()
})
test('expect to display a button with text Delete when the userID(homestored) is the same as the userID on the comment(comments array)', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 1234}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Delete').tagName).toBe('BUTTON')
})
test('expect not to display a button with text Delete when the userID(homestored) is not the same as the userID on the comment(comments array)', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 1234}}]
            },
            homeStored:{
                user_id: 12345//different
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.queryByText('Delete')
    expect(button).not.toBeInTheDocument()
})

test('expect a p tag with the date property displayed', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: 811, thread_id: 123, user: 1234}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: 811, thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const date = screen.getByText(1234)
    expect(date.tagName).toBe('P')
})

test('expect a p tag with the user info pulled from comments array stored in redux to display', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 616}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const user = screen.getByText(616)
    expect(user.tagName).toBe('P')
})

test('expect a label tag with "comment:" string displayed', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 616}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const label = screen.getByText('comment:')
    expect(label.tagName).toBe('LABEL')
})

test('expect a input with placeholder text "Add Comment"', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 616}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const input = screen.getByPlaceholderText('Add Comment')
    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type', 'text')
})

test('expect a input with placeholder text "Add Comment" that dispatches ADDING_COMMENT when user types', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 616}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const input = screen.getByPlaceholderText('Add Comment')
    userEvent.type(input, "a")
    //comment already has value of hello and we have added a with our userEvent
    expect(dispatch).toHaveBeenCalledWith({type: ADDING_COMMENT, comment: "helloa"})
})

test('expect a button tag with text "send"', ()=>{
    const dispatch = jest.fn()
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                comments: [{comment:{comment: 'bye', date: '1234', thread_id: 123, user: 616}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {comment: 'bye', date: '1234', thread_id: 123, user: 747}
    render(<Comment each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('send')
    expect(button.tagName).toBe('BUTTON')
})
// //date error function
test('expect a button tag with text "send" to dispatch ADD_TO_COMMENTS when comment value is not an emptey string', ()=>{
    const dispatch = jest.fn()
    const _Date={
        now(){
            return 1487076708000
        }
    }
    const _uuidv4 = ()=>12
    const _useSelector =(fn)=>{
        return fn({
            editThreadReducer:{
                comment: 'hello',
                
                comments: [{comment:{comment: 'bye', date:"Tue Feb 14 2017 06:51:48 GMT-0600 (Central Standard Time)",thread_id: 123, user: 616}}]
            },
            homeStored:{
                user_id: 1234
            }
        })
    }
    const each = {thread_id: 123}
    render(<Comment _uuidv4={_uuidv4} _Date={_Date} each={each} _useDispatch={()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('send')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: ADD_TO_COMMENTS, comment:{thread_id: 123, comment: 'hello', date: "Tue Feb 14 2017 06:51:48 GMT-0600 (Central Standard Time)", user: 1234}, post: true, comment_id: 12})
})