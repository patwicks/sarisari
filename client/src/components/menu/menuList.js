import React from "react";

//icons
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsGraphUp, BsCreditCard2BackFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const menuList = [
  {
    title: "Home",
    route: "/",
    icon: <AiFillHome className="mx-4 text-xl text-primary" />,
  },
  {
    title: "Product",
    route: "/products",
    icon: <AiOutlineShoppingCart className="mx-4 text-xl text-primary" />,
  },
  {
    title: "Sales",
    route: "/sales",
    icon: <BsGraphUp className="mx-4 text-xl text-primary" />,
  },
  {
    title: "Credit",
    route: "/credit",
    icon: <BsCreditCard2BackFill className="mx-4 text-xl text-primary" />,
  },
  {
    title: "Account",
    route: "/account",
    icon: <MdManageAccounts className="mx-4 text-xl text-primary" />,
  },
];

export default menuList;
