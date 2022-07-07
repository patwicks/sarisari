import React from "react";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="mt-10 min-h-[10rem] overflow-hidden rounded-sm bg-whitey-200 p-4">
      {children}
    </div>
  );
};

export default Modal;
