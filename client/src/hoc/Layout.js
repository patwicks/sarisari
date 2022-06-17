import React from "react";
//local imports
import SideMenu from "../components/menu/SideMenu";
const layout =
  (Component) =>
  ({ ...props }) =>
    (
      <div className="flex h-screen min-w-[320px]">
        <div className="h-full w-[10%] md:w-[20%]">
          <SideMenu />
        </div>
        <div className="h-full w-[90%] md:w-[80%] p-2">
          <Component {...props} />
        </div>
      </div>
    );

export default layout;
