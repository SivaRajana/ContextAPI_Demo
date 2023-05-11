import { useContext } from "react";
import { Context } from "./contextProvider";

export const ReduceButton = () => {
  const { updateCount } = useContext(Context);
  return (
    <button
      onClick={() => {
        updateCount("reduce");
      }}
    >
      Reduce
    </button>
  );
};
