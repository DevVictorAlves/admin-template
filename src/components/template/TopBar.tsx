import useAppData from "@/src/data/hook/useAppData";
import Title from "./Title";
import ButtonAlteranting from "./buttonAlternating";

interface TopProps {
  title: String;
  subTitle: String;
}

export default function TopBar(props: TopProps) {
  const ctx = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subTitle={props.subTitle}></Title>
      <div className={`flex flex-grow justify-end `}>
        <ButtonAlteranting
          tema={ctx.theme!}
          alternaning={ctx.alternatingTheme!}
        ></ButtonAlteranting>
      </div>
    </div>
  );
}
