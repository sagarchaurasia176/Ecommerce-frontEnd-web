import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="  bg-slate-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">

            <NavLink to={"/home"}>
              <div>
                <img
                  src="https://fakestoreapi.com/icons/logo.png"
                  alt="Logo"
                  className="w-10 h-10 mr-2"
                />
              </div>
            </NavLink>

            {/* IT MOVES TO THE HOME PAGE */}
            <NavLink to={"/home"}>
              <div className=" text-black">ShopyMart</div>
            </NavLink>
          </div>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/AddCart">
                <CiShoppingCart className=" text-black-800 size-8 cursor-pointer" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
