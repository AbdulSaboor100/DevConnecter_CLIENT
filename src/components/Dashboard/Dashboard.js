import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserProfile } from "../../redux/Actions/profile";
import Spinner from "../Layout/Spinner/Spinner";

const Dashboard = () => {
  const { loading, user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
    </Fragment>
  );
};

export default Dashboard;
