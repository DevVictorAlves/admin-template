import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/src/model/User";
import Router from "next/router";
import "firebase/compat/auth";
import Cookies from "js-cookie";

interface AuthContentProps {
  user?: User | null;
  loading?: boolean | null;
  loginGoogle?: () => Promise<void>;
  login?: (email: string, senha: string) => Promise<void>;
  register?: (email: string, senha: string) => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContent = createContext<AuthContentProps>({});

async function userNormalized(userFireBase: firebase.User): Promise<User> {
  const token = await userFireBase.getIdToken();
  return {
    uid: userFireBase.uid,
    name: userFireBase.displayName,
    email: userFireBase.email,
    token,
    provider: userFireBase.providerData[0]?.providerId,
    imagemUrl: userFireBase.photoURL,
  };
}

function manageCookie(isAuth: boolean) {
  if (isAuth) {
    Cookies.set("admin-template-auth", isAuth.toString(), {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

interface AuthProviderProps {
  children: any;
}

export function AuthProvider(props: AuthProviderProps) {
  const [loading, setLoading] = useState<boolean | null>(true);
  const [user, setUser] = useState<User | null>(null);

  async function configureSession(userFirebase: firebase.User | null) {
    if (userFirebase?.email) {
      const user = await userNormalized(userFirebase);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configureSession(resp.user!);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, senha: string) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha);

      await configureSession(resp.user!);
      Router.push("/");
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  }

  async function register(email: string, senha: string) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);

      await configureSession(resp.user!);
      Router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configureSession(null);
    } finally {
      Router.push("/auth");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(configureSession);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContent.Provider
      value={{
        user,
        loading,
        loginGoogle,
        login,
        register,
        logout,
      }}
    >
      {props.children}
    </AuthContent.Provider>
  );
}

export default AuthContent;
