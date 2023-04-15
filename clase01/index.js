import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Contador from "./contador";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Contador />
    </StrictMode>
);
