import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconGoogle } from "../components/icons";
import img from "@/public/imgs/meninoBebendoRefri.jpeg";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");

  function submit() {
    if (mode === "login") {
      console.log("login");
    } else {
      console.log("cadastrar");
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
     <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img src="/imgs/meninoBebendoRefri.jpeg" className="h-screen w-full object-cover"  alt="" />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1
          className={`
        text-3xl font-bold 
        mb-5

        `}
        >
          {mode === "login"
            ? "Entre com a Sua Conta"
            : "Cadastra-se na Plataforma"}
        </h1>
        <AuthInput
          type="email"
          label="Email"
          size={100}
          required
          value={email}
          onChange={setEmail}
        ></AuthInput>
        <AuthInput
          label="Senha"
          size={20}
          required
          value={password}
          type="password"
          onChange={setPassword}
        ></AuthInput>

        <button
          onClick={submit}
          className={`
      bg-indigo-500 
        hover:bg-indigo-400
        rounded-lg px-4 py-3
        mt-6
        w-full`}
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className={`my-6 border-gray-300`} />

        <button
          onClick={submit}
          className={`
            flex
            flex-col
            items-center
            justify-center
      bg-red-400 
        hover:bg-red-300
        rounded-lg px-4 py-3
        w-full`}
        >
          <IconGoogle className={"h-7 w-7"}></IconGoogle>
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a onClick={() => setMode('register')} className={`
              text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
              `}> Crie uma conta Gratuitamente</a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a onClick={() => setMode('login')} className={`
              text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
              `}> Entre com suas Credenciais</a>
          </p>
        )}
      </div>
    </div>
  );
}
