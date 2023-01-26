import React from "react";

function Loader({ isLoading }) {
  return (
    <div className={`Loader ${isLoading ? "show" : "hide"}`}>
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
