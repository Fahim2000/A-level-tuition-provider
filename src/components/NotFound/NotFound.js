import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
      <h1 className="text-danger">404</h1>
      <h1>ERROR !</h1>
      <h4>PAGE NOT FOUND</h4>
      <p>
        For Some Reason The Page You Requested Could Not Be Found On Our Server
      </p>
      <button onClick={handleClick} className="btn btn-success">
        {" "}
        Go back to Home
      </button>
    </div>
  );
};

export default NotFound;
