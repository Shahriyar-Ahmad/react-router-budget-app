//  rrd
import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

// Icons
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Uh oh! We've got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <span>Go home</span>
          <HomeIcon width={20} />
        </Link>
      </div>
    </div>
  );
}

export default Error;
