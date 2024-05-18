import { writable } from "svelte/store";

export const team1 = writable("");
export const team2 = writable("");

export const headsTeam = writable("");
export const tailsTeam = writable("");

export const pickingTeam = writable("");

export const teamList = writable([
  "Gyatt Gods",
  "OSHS",
  "Solo Queue",
  "maddox kitten",
  "Eclipse",
  "sic",
]);

export const bo3 = writable(false);

export const startModal = writable(true);

export const startBans = writable(false);

export const winningMap = writable({ link: "", name: "" });

export const startWinningMap = writable(false);

export const currentMapPool = writable([]);

export const currentPickingIndex = writable(1);

export const pickingStartTeam = writable("");

export const picksAndBans = writable([
  { link: "", name: "", team: "", type: "" },
  { link: "", name: "", team: "", type: "" },
  { link: "", name: "", team: "", type: "" },
  { link: "", name: "", team: "", type: "" },
  { link: "", name: "", team: "", type: "" },
  { link: "", name: "", team: "", type: "" },
]);

export const mapPool = writable([
  {
    name: "Icebox",
    link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltde02911a015d7ef9/5f80d2851f5f6d4173b4e49d/Icebox_transparentbg_for_Web.png",
  },
  {
    name: "Lotus",
    link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaae67d0ec5006ef5/63b8a78d28c9fb7a1880a9e2/Lotus_MapWebsite_Web.png",
  },
  {
    name: "Sunset",
    link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9053fb44094718e6/64e934091ab3c3ccb703dd43/SUNSET_LoadingScreen_Desktop.png",
  },
  {
    name: "Breeze",
    link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb03d2e4867f2e324/607f995892f0063e5c0711bd/breeze-featured_v1.png",
  },
  {
    name: "Ascent",
    link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta9b912e1a1b59aa4/5ebc471cfa550001f72bcb13/ascent-featured.png",
  },
  {
    name: "Bind",
    link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8538036a309525ae/5ebc470bfd85ad7411ce6b50/bind-featured.png",
  },
  {
    name: "Split",
    link: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd188c023f88f7d91/5ebc46db20f7727335261fcd/split-featured.png",
  },
]);
