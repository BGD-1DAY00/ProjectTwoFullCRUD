import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CREATE_ACCOUNT, LOGIN_USER } from "../Store/reducers/actions/actions";
import { Home } from "./Home";


test("expect CREATE_ACCOUNT to dispatch when button with text Create An Account is clicked", () => {
    const dispatch = jest.fn();
    render(
      <Home _useDispatch={() => dispatch} />
    );

    const button = screen.getByText("Create An Account");
    userEvent.click(button);
    expect(dispatch).toHaveBeenCalledWith({
      type: CREATE_ACCOUNT
    });
});

test("expect LOGIN_USER to dispatch when button with text Log In is clicked", () => {
    const dispatch = jest.fn();
    render(
      <Home _useDispatch={() => dispatch} />
    );

    const button = screen.getByText("Log In");
    userEvent.click(button);
    expect(dispatch).toHaveBeenCalledWith({
      type: LOGIN_USER
    });
});
  