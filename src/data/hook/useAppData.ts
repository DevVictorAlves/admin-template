import { useContext } from "react";
import AppContent from "../context/AppContent";

const useAppData = () => useContext(AppContent);
export default useAppData;