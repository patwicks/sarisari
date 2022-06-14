import React from "react";
import { Link } from "react-router-dom";
//local imports
import menuList from "./menuList";
//images
import DEFAULT_IMG from "../../assets/default.png";
const SideMenu = () => {
  return (
    <div className={`h-screen w-[15rem] bg-whitey-100`}>
      {/* Top start */}
      <div className="center w-full flex-col bg-primary p-4 text-white">
        <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-whitey-200/75">
          <img className="h-full w-full" src={DEFAULT_IMG} alt="profile" />
        </div>
        <h1 className="mt-2 text-xl font-bold">Patrick</h1>
        <p className="text-sm text-whitey-200">owner</p>
      </div>
      {/* Top end / list menu start */}
      <div>
        <ul>
          {menuList?.map((list, index) => (
            <li className="flex h-16 items-center border p-0" key={index}>
              <Link className="flex items-center h-full w-full" to={list.route}>
                <div>{list.icon}</div>
                <p>{list.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
