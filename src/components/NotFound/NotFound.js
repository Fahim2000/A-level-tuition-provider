import React from "react";

const NotFound = () => {
  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
      <h1 className="text-danger">404</h1>
      <h1>ERROR !</h1>
      <h4>PAGE NOT FOUND</h4>
      <p>
        For Some Reason The Page You Requested Could Not Be Found On Our Server
      </p>
    </div>
  );
};

export default NotFound;
