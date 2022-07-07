import React from "react";

//icons
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const menuList = [
  {
    title: "Home",
    route: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Product",
    route: "/products",
    icon: <AiOutlineShoppingCart />,
  },
  {
    title: "Sales",
    route: "/sales",
    icon: <BsGraphUp />,
  },
  {
    title: "Account",
    route: "/account",
    icon: <MdManageAccounts />,
  }
];

export default menuList;
