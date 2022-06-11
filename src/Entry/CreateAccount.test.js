import { render, screen } from "@testing-library/react";
import {
  GO_BACK_HOME_FROM_CREATE_ACCOUNT,
  ADD_FIRST_NAME,
  ADD_LAST_NAME,
  CREATE_USER,
  USER_EXIST,
  GO_TO_MAIN_PAGE,
  ENTER_USERNAME_PASSWORD,
} from "../Store/reducers/actions/actions";
import { CreateAccount } from "./CreateAccount";
import userEvent from "@testing-library/user-event";

test(`Should display an H1 with text "Creating New User :)" regardless of the state`, () => {
  const _useDispatch = () => {};
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: null,
        password: null,
        users: null,
        user_exist: null,
      },
    });
  };
  render(
    <CreateAccount _useSelector={_useSelector} _useDispatch={_useDispatch} />
  );
  const heading = screen.getByText("Creating New User :)");
  expect(heading.tagName).toBe("H1");
});

test("Should dispatch GO_BACK_HOME_FROM_CREATE_ACCOUNT when button is clicked", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: null,
        password: null,
        users: null,
        user_exist: null,
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const button = screen.getByText("Go Back");
  expect(button.tagName).toBe("BUTTON");
  userEvent.click(button);
  expect(dispatch).toHaveBeenCalledWith({
    type: GO_BACK_HOME_FROM_CREATE_ACCOUNT,
  });
});

test("expect label with the text Username: is the CreateAccount component", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: null,
        password: null,
        users: null,
        user_exist: null,
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const label = screen.getByText("Username:");
  expect(label.tagName).toBe("LABEL");
});

test("expect input value of  username to have an emptey string value unless added to, in the CreateAccount Comopnent", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: null,
        password: null,
        users: null,
        user_exist: null,
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const input = screen.getByPlaceholderText("First Name");
  expect(input).toHaveAttribute("type", "text");
  userEvent.type(input, "a");
  expect(dispatch).toHaveBeenCalledWith({
    type: ADD_FIRST_NAME,
    username: "a",
  });
});

test("expect label with the text Password: is the CreateAccount component", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: null,
        password: null,
        users: null,
        user_exist: null,
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const label = screen.getByText("Password:");
  expect(label.tagName).toBe("LABEL");
});

test("expect input value of password to have an emptey string value unless added to, in the CreateAccount Comopnent", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: null,
        password: null,
        users: null,
        user_exist: null,
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const input = screen.getByPlaceholderText("Last Name");
  expect(input).toHaveAttribute("type", "text");
  userEvent.type(input, "a");
  expect(dispatch).toHaveBeenCalledWith({ type: ADD_LAST_NAME, password: "a" });
});

test("expect screen to have a button with text Add User", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {},
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const button = screen.getByText("Add User");
  expect(button.tagName).toBe("BUTTON");
});
test("expect screen to have a button with text Add User, if the password and username is true and the length of the array is greater than one, also if user exists within our state then user_exist should return true", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: "j",
        password: "j",
        users: [{ username: "j", password: "j" }],
        user_exist: null,
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const button = screen.getByText("Add User");
  userEvent.click(button);
  expect(dispatch).toHaveBeenCalledWith({ type: USER_EXIST, user_exist: true });
});

test("expect screen to have a button with text Add User, if user clicks button and the user doesn't exist it will then create the user ", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: "john",
        password: "john",
        users: [{ username: "apple", password: "orange" }],
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
      },
    });
  };
  const _uuidv4 = () => {
    return 1234;
  };
  render(
    <CreateAccount
      _useDispatch={() => dispatch}
      _useSelector={_useSelector}
      _uuidv4={_uuidv4}
    />
  );
  const button = screen.getByText("Add User");
  userEvent.click(button);
  expect(dispatch).toHaveBeenCalledWith({
    type: CREATE_USER,
    user: { username: "john", password: "john", user_id: 1234 },
    showForm: false,
    user_exist: false,
    loginFail: false,
  });
});
test("expect screen to have a button with text Add User, if user clicks button and the user doesn't exist it will then create the user and send them to the main page ", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: "john",
        password: "john",
        users: [{ username: "apple", password: "orange" }],
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
      },
    });
  };
  const _uuidv4 = () => {
    return 1234;
  };
  render(
    <CreateAccount
      _useDispatch={() => dispatch}
      _useSelector={_useSelector}
      _uuidv4={_uuidv4}
    />
  );
  const button = screen.getByText("Add User");
  userEvent.click(button);
  expect(dispatch).toHaveBeenCalledWith({
    type: GO_TO_MAIN_PAGE,
    user_id: 1234,
    userName: "john",
  });
});

test("expect screen to have an H1 with text 'You Already Have An Account With Us' when user_exist state is true, as well as an H4 tag with text specified below", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        user_exist: true,
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );
  const headingh1 = screen.getByText("You Alreay Have An Account With Us");
  expect(headingh1.tagName).toBe("H1");

  const headingh4 = screen.getByText("Please Log In Or Create A New Account");
  expect(headingh4.tagName).toBe("H4");
});

test("expect the state user_password to change to true if the username or password is falsey", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: "",
        password: "",
        users: [{ username: "apple", password: "orange" }],
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        user_password:false
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );

  const button = screen.getByText("Add User");
  userEvent.click(button);
  expect(dispatch).toHaveBeenCalledWith({
    type: ENTER_USERNAME_PASSWORD,
    user_password: true
  });
});


test("expect screen to have an H1 with text 'Please enter a username and password' when user_password state is true", () => {
  const dispatch = jest.fn();
  const _useSelector = (fn) => {
    return fn({
      createStored: {
        username: "",
        password: "",
        users: [{ username: "apple", password: "orange" }],
        user_exist: false,
        login_user_exist: false,
        login_failed: false,
        user_password: true
      },
    });
  };
  render(
    <CreateAccount _useDispatch={() => dispatch} _useSelector={_useSelector} />
  );  
  const headingh1 = screen.getByText("Please enter a username and password");
  expect(headingh1.tagName).toBe("H1");

});
