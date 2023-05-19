import React from "react";
import { NavLink } from "react-router-dom";
import CreateAPostModal from "./CreateAPostModal";

import logo from './../img/logo.png';

const LogingHeader = () => {
  return (
    <>
      <CreateAPostModal />
      <nav className="bg-white shadow-lg py-1">
        {/* <!-- Horizontal navbar --> */}
        <div className=" py-2 max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src={logo}
                alt="foodies-logo"
                height="150"
                width="120"
              />
              <div className="flex items-center py-4 px-6 mr-12">
                <NavLink
                  className="font-thinKidFont font-semibold text-4xl md:text-2xl sm:text-xl"
                  to="/home"
                >
                  The best foods
                </NavLink>
              </div>
              {/* <!-- Primary Navbar items --> */}
            </div>

            {/* <!-- Secondary Navbar items --> */}
            <div className="flex items-center space-x-3">
              <>
                <label
                  htmlFor="create-post-modal"
                  className="py-1 px-2 rounded bg-red-600 hover:bg-red-900 hover:text-white font-semibold"
                >
                  <h4 >Create Post</h4>
                </label>
               
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LogingHeader;
