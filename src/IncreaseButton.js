import { useContext } from "react";
import { Context } from "./contextProvider";

export const IncreaseButton = () => {
  const { updateCount } = useContext(Context);
  return (
    <button
      onClick={() => {
        updateCount("increase");
      }}
    >
      increase
    </button>
  );
};
