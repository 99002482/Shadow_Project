import React from "react";
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
