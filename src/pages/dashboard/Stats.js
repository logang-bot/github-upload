import React from "react";
import { useDispatch } from "react-redux";

import { errorActions } from "../../store/error";

const Stats = () => {
  const dispatch = useDispatch();
  const trigger = () => {
    dispatch(errorActions.setError("stats error"));
  };
  return (
    <div>
      Stats
      <button onClick={trigger}>Trigger error</button>
    </div>
  );
};

export default Stats;
