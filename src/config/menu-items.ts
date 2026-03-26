export interface MenuItem {
  id: string;
  name: string;
  link: string;
  position: number;
  parent?: string;
  enabled: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "recently-updated",
    name: "Recently Updated",
    link: "/recently-updated",
    position: 99,
    enabled: true
  },
  {
    id: "arcades",
    name: "Arcades",
    link: "/arcades",
    position: 1,
    enabled: true
  },
  {
    id: "games",
    name: "Games",
    link: "/games",
    position: 2,
    enabled: true
  },
  {
    id: "pinball",
    name: "Pinball",
    link: "/pinball",
    position: 3,
    enabled: false
  },
  {
    id: "arcade-locator",
    name: "Arcade Locator",
    link: "/arcade-locator",
    parent: "arcades",
    position: 5,
    enabled: true
  },
  {
    id: "game-locator",
    name: "Game Locator",
    link: "/game-locator",
    parent: "games",
    position: 6,
    enabled: true
  },
  {
    id: "arcades-directory",
    name: "Directory",
    link: "/arcades/directory",
    parent: "arcades",
    position: 10,
    enabled: true
  },
  {
    id: "arcades-search",
    name: "Search",
    link: "/arcades/search",
    parent: "arcades",
    position: 11,
    enabled: true
  },
  {
    id: "arcades-top-25",
    name: "Top 25 Arcades",
    link: "/arcades/top-25",
    parent: "arcades",
    position: 12,
    enabled: false
  },
  {
    id: "games-directory",
    name: "Directory",
    link: "/games/directory",
    parent: "games",
    position: 10,
    enabled: true
  },
  {
    id: "games-search",
    name: "Search",
    link: "/games/search",
    parent: "games",
    position: 11,
    enabled: true
  },
  {
    id: "games-top-25",
    name: "Top 25 Games",
    link: "/games/top-25",
    parent: "games",
    position: 12,
    enabled: true
  },
];