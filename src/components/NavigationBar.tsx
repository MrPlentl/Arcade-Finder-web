'use client';
import React, { useState } from "react";
import NavbarLogo from "./navbar/NavbarLogo";
import MobileMenu from "./navbar/MobileMenu";
import MainMenu from "./navbar/MainMenu";
import SearchBar from "./navbar/SearchBar";
import LoginOptions from "./navbar/LoginOptions";

import { USER_SUPPORT_ENABLED } from '@/config/config';

import { Navbar } from "@heroui/react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-12">
      <MobileMenu isMenuOpen={isMenuOpen} />
      <NavbarLogo />
      <MainMenu />
      <SearchBar />

      {USER_SUPPORT_ENABLED && (
        <LoginOptions />
      )}
    </Navbar>
  );
};

export default NavigationBar;