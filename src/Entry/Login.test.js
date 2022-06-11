import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ADD_FIRST_NAME, ADD_LAST_NAME, GO_BACK_HOME_FROM_CREATE_ACCOUNT, USER_EXIST, GO_TO_MAIN_PAGE, LOGIN_FAILED } from "../Store/reducers/actions/actions";
import { Login } from "./Login";

test("expect h2 with text LOG IN ESTEEMED USER", () => {
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
  render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
  const heading = screen.getByText("LOG IN ESTEEMED USER");
  expect(heading.tagName).toBe("H2");
});
test("expect a button with text Go Back", () => {
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
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const button = screen.getByText("Go Back");
    expect(button.tagName).toBe("BUTTON");
  });
test("expect button to be dispatched with GO_BACK_HOME_FROM_CREATE_ACCOUNT from Login component", () => {
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
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const button = screen.getByText("Go Back");

    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type:GO_BACK_HOME_FROM_CREATE_ACCOUNT })

  });

  test("expect a label with text Username:", () => {
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
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const label = screen.getByText("Username:");
    expect(label.tagName).toBe("LABEL");
  });

  test("expect a label with text Password:", () => {
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
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const label = screen.getByText("Password:");
    expect(label.tagName).toBe("LABEL");
  });

  test("expect input value of username to have an emptey string value unless added to, in the Login Comopnent", () => {
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
      <Login _useDispatch={() => dispatch} _useSelector={_useSelector} />
    );
    const input = screen.getByPlaceholderText("Username");
    expect(input).toHaveAttribute("type", "text");
    userEvent.type(input, "a");
    expect(dispatch).toHaveBeenCalledWith({
      type: ADD_FIRST_NAME,
      username: "a",
    });
  });

  test("expect input value of password to have an emptey string value unless added to, in the Login Comopnent", () => {
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
      <Login _useDispatch={() => dispatch} _useSelector={_useSelector} />
    );
    const input = screen.getByPlaceholderText("Password");
    expect(input).toHaveAttribute("type", "text");
    userEvent.type(input, "a");
    expect(dispatch).toHaveBeenCalledWith({
      type: ADD_LAST_NAME,
      password: "a",
    });
  });


  test("expect a button with text Log In", () => {
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
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const button = screen.getByText("Log In");
    expect(button.tagName).toBe("BUTTON");
  });


  test("expect a button with text Log In", () => {
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
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const button = screen.getByText("Log In");
    expect(button.tagName).toBe("BUTTON");
  });

  test("expect USER_EXIST to be dispatched when button is clicked an user list is greater than 0", () => {
    const dispatch = jest.fn();
    const _useSelector = (fn) => {
      return fn({
        createStored: {
          username: "john",
          password: "john",
          users: [{username: 'john', password: 'john'}],
          user_exist: null,
        },
      });
    };
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const button = screen.getByText("Log In");
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type:USER_EXIST, login_user_exist: false, loginFail: false})
  });

  test("expect GO_TO_MAIN_PAGE to be dispatched when button is clicked an user list is greater than 0", () => {
    const dispatch = jest.fn();
    const _useSelector = (fn) => {
      return fn({
        createStored:{
            username: 'john',
            password: 'john',
            users: [{username:'john', password:'john', user_id: 123}],
            
        }
      });
    };
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const button = screen.getByText("Log In");
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: GO_TO_MAIN_PAGE, userName:'john',user_id: 123})
  });

  test("expect LOGIN_FAILED to be dispatched when button is clicked an user list is less than or equal to 0", () => {
    const dispatch = jest.fn();
    const _useSelector = (fn) => {
      return fn({
        createStored:{
            username: '',
            password: '',
            users: [],
            
        }
      });
    };
    render(<Login _useDispatch={() => dispatch} _useSelector={_useSelector} />);
    const button = screen.getByText("Log In");
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: LOGIN_FAILED, loginFail:true, login_user_exist: true})
  });
