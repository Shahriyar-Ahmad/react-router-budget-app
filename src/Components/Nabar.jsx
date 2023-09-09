// rrd
import React from "react";
// rrd
import { Form, NavLink } from "react-router-dom";

// iCONS
import { TrashIcon } from "@heroicons/react/24/solid";

// assets
import LogoMark from "../assets/logomark.svg";

function Nabar({ userName }) {
  return (
    <nav>
      <NavLink to={"/"} aria-label="Home">
        <img src={LogoMark} alt="logomark" />
        <span>Home</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(e) => {
            if (!confirm("Delete User and All Data")) {
              e.preventDefault();
            }
          }}
        >
          <button className="btn btn--warning" type="submit">
            <span>
              Delete User
              <TrashIcon width={30} />
            </span>
          </button>
        </Form>
      )}
    </nav>
  );
}

export default Nabar;
