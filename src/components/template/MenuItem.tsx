import Link from "next/link";

interface MenuProps {
  url?: String;
  onClick?: (evento: any) => void;
  text: String;
  className?: String;
  icon: any;
}

export default function MenuItem(props: MenuProps) {
  function renderedLink() {
    return (
      <div
        className={`flex flex-col justify-center items-center h-20 w-20 
        dark:text-gray-200
        text-gray-500
        ${props.className}`}
      >
        {" "}
        {props.icon}
        <span className={`text-xs font-light `}>
          {props.text}
        </span>{" "}
      </div>
    );
  }

  return (
    <li
      onClick={props.onClick}
      className={`dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer`}
    >
      {props.url ? (
        <Link
          className={`flex flex-col justify-center items-center h-20 w-20`}
          href={props.url.toString()}
        >
          {renderedLink()}
        </Link>
      ) : (
        renderedLink()
      )}
    </li>
  );
}
