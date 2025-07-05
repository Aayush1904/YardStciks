import { HiOutlineCurrencyDollar } from "react-icons/hi";
import {
  LuLayoutDashboard,
  LuHandCoins,
  LuWalletMinimal,
} from "react-icons/lu";

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/",
  },
  {
    id: "02",
    label: "Income",
    icon: LuWalletMinimal,
    path: "/income",
  },
  {
    id: "03",
    label: "Expense",
    icon: LuHandCoins,
    path: "/expense",
  },
  {
    id: "04",
    label: "Budget",
    icon: HiOutlineCurrencyDollar,
    path: "/budget",
  },
];
