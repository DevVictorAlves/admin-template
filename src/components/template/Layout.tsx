import useAppData from "@/src/data/hook/useAppData";
import Content from "./Content";
import MenuSide from "./MenuSide";
import TopBar from "./TopBar";

interface LayoutProps {
  title: String;
  subTitle: String;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const ctx = useAppData();
  return (
    <div className={`${ctx.theme} flex h-screen w-screen`}>
      <MenuSide></MenuSide>
      <div className={`flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
        <TopBar title={props.title} subTitle={props.subTitle}></TopBar>
        <Content children={props.children}></Content>
      </div>
    </div>
  );
}
