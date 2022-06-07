import { render, screen } from "@testing-library/react";
import { CreateAccount } from "./CreateAccount";

test(`Should display an H1 with text "Creating New User :)" regardless of the state`, ()=>{
    const _useDispatch = ()=>{}
    const _useSelector = (fn) => {
        return fn({
          createStored: {
            username: null,
            password: null,
            users: null,
            user_exist: null
          },
        });
      };
    render(<CreateAccount _useSelector={_useSelector} _useDispatch={_useDispatch} />)
    const heading = screen.getByText('Creating New User :)')
    expect(heading.tagName).toBe('H1')
})