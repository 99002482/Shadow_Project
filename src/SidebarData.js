import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';

export const SidebarData =[

    
    {
      title: 'User Profile',
      path: '/products',
      icon: <FiIcons.FiSettings />,
      cName: 'nav-text'
    },
    {
        title: 'LogOut',
        path: '/Login',
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text'
      },
    
  ];