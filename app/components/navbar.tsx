"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Drawer, Dropdown, Menu } from 'antd';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setIsOpen(false); // Close the dropdown when the drawer is closed
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown menu for "Home" page link
  const menu = (
    <Menu style={{ width: '200px', maxHeight: '300px', overflowY: 'auto',borderRadius: '0',marginTop: '17px'   }}>
      <Menu.Item key="1">
        <a href="#">Option 1</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <a href="#">Option 2</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <a href="#">Option 3</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="h-16 bg-blue-400 flex items-center">
      <div className="ml-4">
        <h1 className="text-xl text-white font-semibold uppercase">Navbar</h1>
      </div>
      <ul className="ml-auto mr-8 flex space-x-4 uppercase font-medium">
        <li className="hidden sm:block">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link text-white hover:underline hover:text-blue-600 hover:border-b-3 hover:border-blue-700" onClick={e => e.preventDefault()}>
              Home
            </a>
          </Dropdown>
        </li>
        <li className="hidden sm:block"><a href="#" className="text-white hover:underline hover:text-blue-600 hover:border-b-3 hover:border-blue-700">Profile</a></li>
        <li className="hidden sm:block"><a href="#" className="text-white hover:underline hover:text-blue-600 hover:border-b-3 hover:border-blue-700">Settings</a></li>
        <li className="hidden sm:block"><a href="#" className="text-white hover:underline hover:text-blue-600 hover:border-b-3 hover:border-blue-700">Cart</a></li>
        <li className="sm:hidden">
          <button className="text-white focus:outline-none" onClick={showDrawer}>
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </li>
      </ul>

      {/* mobile query */}

      
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={open} width={400}>
        <div className='items-center justify-between list-none font-medium space-y-4'>
          <li className="text-black hover:border-blue-700 uppercase font-medium">
            <a href="#" className="flex items-center justify-between" onClick={toggleDropdown}>
              Home
              {isOpen ? (
                <FontAwesomeIcon icon={faAngleUp} className="ml-1" />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              )}
            </a>
            {isOpen && (
              <ul className="ml-0 mt-2 space-y-2">
                <li><a href="#" onClick={onClose}>Item 1</a></li>
                <li><a href="#" onClick={onClose}>Item 2</a></li>
                <li><a href="#" onClick={onClose}>Item 3</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" className="text-black hover:underline hover:text-blue-600 hover:border-b-3 hover:border-blue-700 uppercase font-medium" onClick={onClose}>Profile</a></li>
          <li><a href="#" className="text-black hover:underline hover:text-blue-600 hover:border-b-3 hover:border-blue-700 uppercase font-medium" onClick={onClose}>Settings</a></li>
          <li><a href="#" className="text-black hover:underline hover:text-blue-600 hover:border-b-3 hover:border-blue-700 uppercase font-medium" onClick={onClose}>Cart</a></li>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
