import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "User Profile",
    icon: <FiIcons.FiSettings />,
    link: "/profile",
  },
  {
    title: "LogOut",
    icon: <BiIcons.BiLogOut />,
    link: "/Login",
  },
];
