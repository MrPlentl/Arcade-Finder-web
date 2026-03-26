import {
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@heroui/react";

import { Activity, ChevronDown, Flash,Lock, Scale, Search, Server, TagUser} from '@/components/icons';
import { menuItems } from "../../config/menu-items";

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
  scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  lock: <Lock className="text-success" fill="currentColor" size={30} />,
  activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  server: <Server className="text-success" fill="currentColor" size={30} />,
  search: <Search size={30} />,
  user: <TagUser className="text-danger" fill="currentColor" size={30} />,
};

interface NavItem {
  id: string;
  name: string;
  link: string;
  position: number;
  enabled?: boolean;
  parent?: string;
  children?: NavItem[];
}

function buildNavTree(items: NavItem[]): NavItem[] {
  const itemMap = new Map<string, NavItem>();
  const rootItems: NavItem[] = [];

  // Clone items to avoid mutating the originals
  items.forEach((item) => itemMap.set(item.id, { ...item }));

  itemMap.forEach((item) => {
    if (item.parent) {
      const parent = itemMap.get(item.parent);
      if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(item);
      }
    } else {
      rootItems.push(item);
    }
  });

  // Sort root items and children by position
  const sortByPosition = (a: NavItem, b: NavItem) => a.position - b.position;

  rootItems.sort(sortByPosition);
  itemMap.forEach((item) => {
    if (item.children) item.children.sort(sortByPosition);
  });

  return rootItems;
}

const MainMenu = () => {
  const navItems = buildNavTree(menuItems);
  console.log(navItems);
  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="start">
    {buildNavTree(navItems).map((item) =>
      item.children ? (
        <Dropdown key={item.id}>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                key={item.id}
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-inherit"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                {item.name}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label={item.name}
            disabledKeys={item.children
              .filter((child) => child.enabled === false)
              .map((child) => child.id)}
          >
            {item.children.map((child) => (
              <DropdownItem
                key={child.id}
                className="text-inherit"
                href={child.enabled === false ? undefined : child.link}
              >
                {child.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <NavbarItem key={item.id}>
          <Link className="text-inherit" href={item.link} isDisabled={item.enabled === false}>
            {item.name}
          </Link>
        </NavbarItem>
      )
    )}
    </NavbarContent>
  );
};

export default MainMenu;
