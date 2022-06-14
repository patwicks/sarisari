import React from "react";
//local imports
import SideMenu from "../components/menu/SideMenu";
const layout =
  (Component) =>
  ({ ...props }) =>
    (
      <div className="flex">
        <SideMenu />
        <div>
          <Component {...props} />
        </div>
      </div>
    );

export default layout;
