import { render, screen } from "@testing-library/react";
import { CreateThread } from "./CreateThread";
import userEvent from "@testing-library/user-event";
import {
  ADD_THREAD,
  CREATE_THREAD,
} from "../../Store/reducers/actions/actions";

test('expect label tag with the text "Create Thread:"', () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        user_id: 1234,
        userName: "john",
      },
      mainThread: {},
    });
  };
  render(
    <CreateThread _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  expect(screen.getByText("Create Thread:").tagName).toBe("LABEL");
});

test('expect an input label with placeholder "Add Thread..." which dispatches CREATE_THREAD when user types', () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      homeStored: {},
      mainThread: {},
    });
  };
  render(
    <CreateThread _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const input = screen.getByPlaceholderText("Add Thread...");
  expect(input).toHaveAttribute("type", "text");
  userEvent.type(input, "a");
  expect(dispatch).toHaveBeenCalledWith({ type: CREATE_THREAD, thread: "a" });
});

test('expect a button with text "Submit"', () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      homeStored: {},
      mainThread: {},
    });
  };
  render(
    <CreateThread _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  expect(screen.getByText("Submit").tagName).toBe("BUTTON");
});

//here QUESTION
test('expect a button with text "Submit" when clicked to dispatch ADD_THREAD', () => {
  const dispatch = jest.fn();
  //const _Date = Date.now = jest.fn(() => 1487076708000)
  const _Date ={
      now:()=>1487076708000
  }
  
  const _uuidv4 = () => 12;
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        user_id: 12345,
        userName: "hello",
      },
      mainThread: {
        thread: "hello",
        thread_id: 1234,
        date: _Date,
        created_by: 12,
        user: "john",
      },
    });
  };
  render(
    <CreateThread
      _useDispatch={() => dispatch}
      _Date={_Date}
      _uuidv4={_uuidv4}
      _useSelector={_useSelector}
    />
  );
  const button = screen.getByText("Submit");
  userEvent.click(button);
  expect(dispatch).toHaveBeenCalledWith({
    type: ADD_THREAD,
    threadInfo: {
      created_by: 12345,
     thread_id: 12,
      thread: "hello",
      user: "hello",
      date:"Tue Feb 14 2017 06:51:48 GMT-0600 (Central Standard Time)"

    },
  });
});
