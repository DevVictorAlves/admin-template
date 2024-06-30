import { useContext } from "react";
import AuthContent from "../context/AuthContent";

const useAuth = () => useContext(AuthContent);
export default useAuth;
