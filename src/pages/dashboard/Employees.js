import React from "react";
import { useDispatch } from "react-redux";

import { errorActions } from "../../store/error";

const Employees = () => {
  const dispatch = useDispatch();

  const trigger = () => {
    dispatch(errorActions.setError("employees error"));
  };

  return (
    <div>
      <button onClick={trigger}>Trigger error</button>
    </div>
  );
};

export default Employees;
