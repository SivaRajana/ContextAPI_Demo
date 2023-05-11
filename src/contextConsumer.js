import { useContext } from "react";
import { Context } from "./contextProvider";

export const Moniter = () => {
  const { count } = useContext(Context);
  return <div>{count}</div>;
};
