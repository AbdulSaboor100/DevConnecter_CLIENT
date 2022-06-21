import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/Layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/Actions/auth";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Alert />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  );
}

export default App;
