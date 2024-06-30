import Image from "next/image";
import loadingimage from "../../public/gifs/loading.gif";
import useAuth from "@/src/data/hook/useAuth";
import Router from "next/router";


export default function NotFoundPage() {
  const { loading } = useAuth();

  function renderedLoading() {
    return (
      <div className="flex justify-center items-center h-screen bg-transparent">
        <Image
          src={loadingimage}
          alt="imagem de carregamento"
          className="w-20 h-30 bg-transparent"
        ></Image>
      </div>
    );
  }

  if (loading) {
    return renderedLoading();
  } else {
    Router.push("/");
  }
}
