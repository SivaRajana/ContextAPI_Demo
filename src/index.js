import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./contextProvider";
import App from "./App";
import { Moniter } from "./contextConsumer";
import { ReduceButton } from "./ReduceButton";
import { IncreaseButton } from "./IncreaseButton";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
      <Moniter />
      <IncreaseButton />
      <ReduceButton />
    </ContextProvider>
  </StrictMode>
);
