import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ADDING_TO_UPDATING_COMMENT, UPDATING_COMMENT,UPDATE_EDIT_COMMENTS, BACK_TO_MAIN_PAGE } from "../../Store/reducers/actions/actions";
import { EditComments } from "./EditComments";


test('expect label with text ""Comment:', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            editThreadReducer:{
                postToEdit: {
                    comment: 'hello'
                },
                comments: [],
                updatedComment: 'hello'
            }
        })
    }
    render(<EditComments _useSelector={_useSelector} _useDispatch= {()=> dispatch} />)
    expect(screen.getByText('Comment:').tagName).toBe('LABEL')
})

test('expect input with placeholder text that matches the comment value specified in the postToEdit State', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            editThreadReducer:{
                postToEdit: {
                    comment: {
                        comment: 'hello'
                    }
                },
                comments: [],
                updatedComment: 'hello'
            }
        })
    }
    render(<EditComments _useSelector={_useSelector} _useDispatch= {()=> dispatch} />)
    expect(screen.getByPlaceholderText('hello').tagName).toBe('INPUT')
})

test('expect input with placeholder text that matches the comment value specified in the postToEdit State dispatches UPDATING_COMMENT', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            editThreadReducer:{
                postToEdit: {
                    comment: {
                        comment: 'hello'
                    }
                },
                comments: [],
                updatedComment: 'hello'
            }
        })
    }
    render(<EditComments _useSelector={_useSelector} _useDispatch= {()=> dispatch} />)
    const input = screen.getByPlaceholderText('hello')
    userEvent.type(input, 'a')
    expect(dispatch).toHaveBeenCalledWith({type: UPDATING_COMMENT, comment: 'helloa'})
})

test('expect button with text "UpdatePost"', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            editThreadReducer:{
                postToEdit: {
                    comment: {
                        comment: 'hello'
                    }
                },
                comments: [],
                updatedComment: 'no'
            }
        })
    }
    render(<EditComments _useSelector={_useSelector} _useDispatch= {()=> dispatch} />)
    expect(screen.getByText('UpdatePost').tagName).toBe('BUTTON')
})

test('expect button with text "UpdatePost" when clicked to dispatch ADDING_TO_UPDATING_COMMENT; UPDATE_EDIT_COMMENTS; BACK_TO_MAIN_PAGE', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn)=>{
        return fn({
            editThreadReducer:{
                postToEdit: {
                    comment: {
                        comment: 'hello'
                    },
                    comment_id: 1
                },
                comments: [{
                    comment:{
                        comment: 'hello'
                    },
                    comment_id: 1
                },
                {  comment:{
                        comment: 'bye'
                    },
                    comment_id: 2
                }
                ],
                updatedComment: 'hello'
            }
        })
    }
    render(<EditComments _useSelector={_useSelector} _useDispatch= {()=> dispatch} />)
    const button = screen.getByText('UpdatePost')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: ADDING_TO_UPDATING_COMMENT, comment: '', array:[{ comment:{comment: 'bye'},comment_id: 2}], objToUpdate: {comment:{comment: 'hello'}, comment_id: 1}})
    expect(dispatch).toHaveBeenCalledWith({type:UPDATE_EDIT_COMMENTS})
    expect(dispatch).toHaveBeenCalledWith({type: BACK_TO_MAIN_PAGE})
})

