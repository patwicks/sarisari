import React from "react";

const Loader = () => {
  return (
    <div className="center gap-1">
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary animation-delay-100 "></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary animation-delay-300 bg-opacity-90"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary animation-delay-400 bg-opacity-80"></div>
    </div>
  );
};

export default Loader;
