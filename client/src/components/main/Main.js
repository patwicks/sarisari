import React, { memo } from "react";

const Main = () => {
  console.log("Main Menu");
  return <div className="h-full">Main</div>;
};

export default memo(Main);
