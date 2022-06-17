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
        <ul className="h-full w-full">
          {menuList?.map((list, index) => (
            <li key={index} className="p-0">
              <NavLink
                to={list.route}
                className="active:text-bold flex h-14 w-full items-center justify-center hover:bg-blacky/10 md:justify-start"
              >
                <span className="text-lg md:mx-3">{list.icon}</span>
                <span className="hidden md:block">{list.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
