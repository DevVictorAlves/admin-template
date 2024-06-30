import Head from "next/head";
import Image from "next/image";
import loadingimage from "../../public/gifs/loading.gif";
import useAuth from "@/src/data/hook/useAuth";
import Router from "next/router";


export default function forceAuth(jsx: any) {
  const { user, loading } = useAuth();

  function renderedContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if(!document.cookie?.includes("admin-template-auth")) {
                  window.location.href = '/auth'        
              }
              `,
            }}
          ></script>
        </Head>
        {jsx}
      </>
    );
  }

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

  if (loading === false && user?.email) {
    return renderedContent();
  } else if (loading) {
    return renderedLoading();
  } else {
    Router.push("/auth");
    return null;
  }
}
