import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Hero from "./pages/welcome/Hero";
import Login from "./pages/login/Login";

import Home from "./pages/dashboard/Home";

function App() {
  const token = useSelector((state) => state.auth.token);

  if (token) {
    return (
      <Routes>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    );
  }

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* {!token ? (
          <Fragment>
            <Route path="/" element={<Navigate replace to="/hero" />}></Route>
            <Route path="/hero" element={<Hero />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/signUp" element={<SignUpForm />}></Route>
            <Route path="/signUp/setAvatar" element={<SetAvatar />}></Route>
          </Fragment>
        ) : (
          <Fragment>
            <Route path="/" element={<Navigate replace to="/admin" />}></Route>
            <Route path="/admin/*" element={<AdminMenu />}></Route>
            <Route path="/admin/profile" element={<Profile />}></Route>
            <Route path="/signUp/setAvatar" element={<SetAvatar />}></Route>
            <Route path="*" element={<p>not found</p>}></Route>
          </Fragment>
        )} */}
      </Routes>
    </Fragment>
  );
}

export default App;
