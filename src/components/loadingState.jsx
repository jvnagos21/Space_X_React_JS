import React from "react";

export default function loadingState() {
  return (
    <div className="spinner">
      <article></article>
      <p className="text-white opacity-75 mt-5">the spinny thing means wait...</p>
    </div>
  );
}
