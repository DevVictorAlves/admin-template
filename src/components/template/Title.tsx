interface TitleProps {
  title: String;
  subTitle: String;
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1
        className={`
        text-gray-900 dark:text-gray-100
      font-black 
      text-3xl`}
      >
        {props.title}
      </h1>
      <h2 className={`font-light text-sm text-gray-600 dark:text-gray-400`}>{props.subTitle}</h2>
    </div>
  );
}
