import { EditThread } from './EditThread'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ADDING_TO_THREAD, BACK_TO_MAIN_PAGE, UPDATED_THREAD } from '../../Store/reducers/actions/actions'

test('expect a H1 tag with text "Edit Your Thread"', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: 'hello',
                newThread:'no',
            },
            mainThread: {
                allThreads: []
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Edit Your Thread').tagName).toBe('H1')
    
})

test('expect a button with text "Back To Main Page"', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: 'hello',
                newThread:'no',
            },
            mainThread: {
                allThreads: []
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Back To Main Page').tagName).toBe('BUTTON') 
})

test('expect a label with text "Update Thread"', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: 'hello',
                newThread:'no',
            },
            mainThread: {
                allThreads: []
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Update Thread:').tagName).toBe('LABEL') 
})

test('expect an input with placholder text "hello" that matches that state pulled in from editReducer', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: {
                    thread: 'hello'
                },
                newThread:'no',
            },
            mainThread: {
                allThreads: []
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByPlaceholderText('hello').tagName).toBe('INPUT') 
})

test('expect a button with text "Update Info"', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: 'hello',
                newThread:'no',
            },
            mainThread: {
                allThreads: []
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    expect(screen.getByText('Update Info').tagName).toBe('BUTTON') 
})

test('expect a button with text "Back To Main Page" to dispatch BACK_TO_MAIN_PAGE when clicked', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: 'hello',
                newThread:'no',
            },
            mainThread: {
                allThreads: []
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Back To Main Page')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: BACK_TO_MAIN_PAGE})
})

test('expect an input with placholder text "hello" that matches that state pulled in from editReducer to dispatch ADDING_TO_THREAD when user types', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: {
                    thread: 'hello'
                },
                newThread:'no',
            },
            mainThread: {
                allThreads: []
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const input = screen.getByPlaceholderText('hello')
    userEvent.type(input, 'a')
    expect(dispatch).toHaveBeenCalledWith({type: ADDING_TO_THREAD, newThread: 'noa'})
})


test('expect a button with text "Update Info" to dispatch UPDATED_THREAD when clicked', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: 
                    {
                        thread: 'one',
                        thread_id: 1
                    },
                newThread:'no',
            },
            mainThread: {
                allThreads: [
                    {
                        thread: 'one',
                        thread_id: 1
                    },                    {
                        thread: 'two',
                        thread_id: 2
                    }
                ]
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Update Info')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: UPDATED_THREAD, updatedObj:{thread: 'no', thread_id: 1}, allThreads: [{thread: 'two', thread_id: 2}] })
})


test('expect a button with text "Update Info" to dispatch BACK_TO_MAIN_PAGE whenn clicked', ()=>{
    const dispatch = jest.fn()
    const _useSelector = (fn) =>{
        return fn({
            editThreadReducer:{
                valToUpdate: 'hello',
                newThread:'no',
            },
            mainThread: {
                allThreads: []
            }
        })
    }
    render(<EditThread _useDispatch = {()=>dispatch} _useSelector={_useSelector} />)
    const button = screen.getByText('Update Info')
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: BACK_TO_MAIN_PAGE})
})
