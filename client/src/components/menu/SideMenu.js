import React from "react";
import { NavLink } from "react-router-dom";
//local imports
import menuList from "./menuList";
//images
import DEFAULT_IMG from "../../assets/default.png";
const SideMenu = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-whitey-100">
      {/* Top start */}
      <div className="center w-full flex-col bg-primary p-4 text-white">
        <div className="h-5 w-5 overflow-hidden rounded-full border-2 border-whitey-200/75 md:h-16 md:w-16">
          <img className="h-full w-full" src={DEFAULT_IMG} alt="profile" />
        </div>
        <h1 className="mt-2 hidden text-xl font-bold md:block">Patrick</h1>
        <p className="hidden text-sm text-whitey-200 md:block">owner</p>
      </div>
      {/* Top end / list menu start */}
      <div>
        <ul>
          {menuList?.map((list, index) => (
            <li
              className="flex h-16 items-center p-0 transition duration-100 ease-in-out "
              key={index}
            >
              <NavLink
                className="flex h-full w-full items-center"
                to={list.route}
              >
                <span className="text-md text-primary hover:text-lg md:mx-4 md:text-xl">
                  {list.icon}
                </span>
                <span className="scale-0 text-sm md:scale-100">
                  {list.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
