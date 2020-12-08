import React from "react";
import { PropagateLoader } from "react-spinners";
import "./Spinner.css";

const Spinner = ({ loading = false }) => {
  return (
    <div className="spinner">
      <PropagateLoader size={15} color={"black"} loading={loading} />
    </div>
  );
};

export default Spinner;
