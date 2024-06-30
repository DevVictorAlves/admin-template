import useAuth from "@/src/data/hook/useAuth";
import {
  IconHome,
  IconLogout,
  IconNotifications,
  IconSettings,
} from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface MenuProps {}

export default function MenuSide(props: MenuProps) {
  const { logout } = useAuth();

  return (
    <aside
      className={`flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900 dark:text-gray-200`}
    >
      <div
        className={`
        flex flex-col items-center justify-center
        h-20 w-20
        bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-800
      `}
      >
        <Logo></Logo>
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Início" icon={IconHome}></MenuItem>
        <MenuItem url="/settings" text="Ajustes" icon={IconSettings}></MenuItem>
        <MenuItem
          url="/notifications"
          text="Notificações"
          icon={IconNotifications}
        ></MenuItem>
      </ul>
      <ul>
        <MenuItem
          className={`
          text-red-600 dark:text-red-400
          hover:bg-red-400 hover:text-white
          dark:hover:text-white
        `}
          text="Sair"
          onClick={logout}
          icon={IconLogout}
        ></MenuItem>
      </ul>
    </aside>
  );
}
