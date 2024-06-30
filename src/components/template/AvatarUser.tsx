import useAuth from "@/src/data/hook/useAuth";
import Link from "next/link";

interface AvatarUserProps {
  className?: string;
}

export default function AvatarUser(props: AvatarUserProps) {
  const { user } = useAuth();

  return (
    <>
      <Link href="/perfil">
        <img
          src={user?.imagemUrl ?? "/imgs/avatar.svg"}
          alt="Avatar do Usuário"
          className={`
            "h-10 w-10 rounded-full cursor-pointer"
            ${props.className}
            `}
        />
      </Link>
    </>
  );
}
