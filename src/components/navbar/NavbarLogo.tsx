
import Link from "next/link";
import {
  NavbarBrand,
  NavbarContent,
} from "@heroui/react";
import { Logo } from '@/components/icons'; 

export default function NavbarLogo() {
  return(
    <NavbarContent>
      <Link href="/">
        <NavbarBrand>
            <Logo />
            <p className="font-bold text-inherit">Arcade Locator</p>
        </NavbarBrand>
      </Link>
    </NavbarContent>
  );
};
