import { render, screen } from "@testing-library/react";
import App from "./App";

test(`If pass state is true it should display an H1 with text: 'Welcome to the Reddit Kind-OF?' `, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: true,
        showCreateAccount: false,
        showLogin: false,
        showThread: false,
        showEdit: false,
        showMessages: false,
        showEditPosts: false,
      },
      searchReducer:{
        search:''
      }
    });
  };
  const _useDispatch = () => {};
  const _Home = () => "hello";
  render(
    <App
      _Home={_Home}
      _useDispatch={_useDispatch}
      _useSelector={_useSelector}
    />
  );
  const heading = screen.getByText("Welcome To Reddit Kind OF?");
  expect(heading.tagName).toBe("H1");
});

test(`if state pass is true it should display a component called home`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: true,
        showCreateAccount: false,
        showLogin: false,
        showThread: false,
        showEdit: false,
        showMessages: false,
      },
      searchReducer:{
        search:''
      }
    });
  };
  //
  const _Home = () => "hello";
  const _useDispatch = () => {};

  render(<App _Home={_Home} _useSelector={_useSelector} _useDispatch={_useDispatch} />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
test(`if state pass is true it should display a component called Nav`, () => {

  const _useSelector = (fn) => {
    return fn({
      searchReducer: {
        search: "",
      },
      homeStored: {
        pass: true,
      },
    });
  };
  //
  const _Nav = () => "hello";
  const _useDispatch = () => {};
  render(<App _Nav={_Nav} _useDispatch={_useDispatch}  _useSelector={_useSelector} />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
test(`if state pass is true it should display a component called TrendingPanel`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: true,
        showCreateAccount: false,
        showLogin: false,
        showThread: false,
        showEdit: false,
        showMessages: false,
      },
      searchReducer:{
        search:''
      }
    });
  };
  //
  const _TrendingPanel = () => "hello";
  const _useDispatch = ()=>{}
  render(<App _TrendingPanel={_TrendingPanel} _useDispatch={_useDispatch} _useSelector={_useSelector} />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});

test(`If pass state is false we should display an emptey screen`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: false,
        showThread: false,
        showEdit: false,
        showMessages: false,
      },
    });
  };
  const _Home = () => "hello";
  render(<App _Home={_Home} _useSelector={_useSelector} />);
  expect(screen).not.toBe();
});

test(`If showCreateAccount state is true we should display an H1 with text 'Welcome to the Reddit Kind-OF?'`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: true,
        showLogin: false,
        showThread: false,
        showEdit: false,
        showMessages: false,
      },
    });
  };
  const _CreateAccount = () => "hello";

  render(<App _CreateAccount={_CreateAccount} _useSelector={_useSelector} />);
  const heading = screen.getByText("Welcome to the Reddit Kind-OF?");
  expect(heading.tagName).toBe("H1");
});
test(`If showCreateAccount state is true we should display a _CreateAccount component`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: true,
        showLogin: false,
        showThread: false,
        showEdit: false,
        showMessages: false,
      },
    });
  };
  const _CreateAccount = () => "hello";
  render(<App _CreateAccount={_CreateAccount} _useSelector={_useSelector} />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
test(`If showLogin state is true we should display text "Welcome to the Reddit Kind-OF?"`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: true,
        showThread: false,
        showEdit: false,
        showMessages: false,
      },
    });
  };
  const _Login = () => "hello";
  render(<App _Login={_Login} _useSelector={_useSelector} />);
  const heading = screen.getByText("Welcome to the Reddit Kind-OF?");
  expect(heading.tagName).toBe("H1");
});
test(`If showLogin state is true we should the Login Component`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: true,
        showThread: false,
        showEdit: false,
        showMessages: false,
      },
    });
  };
  const _Login = () => "hello";
  render(<App _Login={_Login} _useSelector={_useSelector} />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
test(`If showThread state is true we should display text "Welcome to the Reddit Kind-OF?"`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: false,
        showThread: true,
        showEdit: false,
        showMessages: false,
      },
    });
  };
  const _MainPage = () => "hello";
  render(<App _MainPage={_MainPage} _useSelector={_useSelector} />);
  const heading = screen.getByText("Welcome to the Reddit Kind-OF?");
  expect(heading.tagName).toBe("H1");
});
test(`If showThread state is true we should display the MainPage Component`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: false,
        showThread: true,
        showEdit: false,
        showMessages: false,
      },
    });
  };
  const _MainPage = () => "hello";
  render(<App _MainPage={_MainPage} _useSelector={_useSelector} />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
test(`If showEdit state is true we should display text "Welcome to the Reddit Kind-OF?"`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: false,
        showThread: false,
        showEdit: true,
        showMessages: false,
      },
    });
  };
  const _EditThread = () => "hello";
  render(<App _EditThread={_EditThread} _useSelector={_useSelector} />);
  const heading = screen.getByText("Welcome to the Reddit Kind-OF?");
  expect(heading.tagName).toBe("H1");
});
test(`If showEdit state is true we should display text "Welcome to the Reddit Kind-OF?"`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: false,
        showThread: false,
        showEdit: true,
        showMessages: false,
      },
    });
  };
  const _EditThread = () => "hello";
  render(<App _EditThread={_EditThread} _useSelector={_useSelector} />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});

test(`If showMessages state is true we should display text "Welcome to the Reddit Kind-OF?"`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: false,
        showThread: false,
        showEdit: false,
        showMessages: true,
      },
    });
  };
  const _Messages = () => "hello";
  render(<App _Messages={_Messages} _useSelector={_useSelector} />);
  const heading = screen.getByText("Welcome to the Reddit Kind-OF?");
  expect(heading.tagName).toBe("H1");
});

test(`If showMessages state is true we should display the component Messages`, () => {
  const _useSelector = (fn) => {
    return fn({
      homeStored: {
        pass: false,
        showCreateAccount: false,
        showLogin: false,
        showThread: false,
        showEdit: false,
        showMessages: true,
      },
    });
  };
  const _Messages = () => "hello";
  render(<App _Messages={_Messages} _useSelector={_useSelector} />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
