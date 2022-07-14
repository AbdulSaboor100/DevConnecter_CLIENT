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
import PrivateRoute from "./components/Routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/Actions/auth";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
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
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </section>
      </Router>
    </Provider>
  );
}

export default App;
