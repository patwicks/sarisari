import React from "react";

const Loader = () => {
  return (
    <div className="center gap-x-1">
      <div className="h-5 w-1 animation-delay-100 bg-primary animate-zoom-animation"></div>
      <div className="h-5 w-1  animation-delay-200  bg-primary animate-zoom-animation"></div>
      <div className="h-5 w-1  animation-delay-300  bg-primary animate-zoom-animation"></div>
      <div className="h-5 w-1  animation-delay-400  bg-primary animate-zoom-animation"></div>
    </div>
  );
};

export default Loader;
