import { Button, Link, NavbarContent, NavbarItem } from "@heroui/react";

const LoginOptions = () => {
  return(
          <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
  );
};

export default LoginOptions;
