import {
  NavbarContent,
  Input,
} from "@heroui/react";

import { Search } from '@/components/icons';

const icons = {
  search: <Search size={16} />
};

const SearchBar = () => {
  return (
    <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Find an Arcade..."
          size="sm"
          startContent={icons.search}
          type="search"
        />
    </NavbarContent>
  );
};

export default SearchBar;
