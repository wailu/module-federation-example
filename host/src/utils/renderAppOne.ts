import { Suspense, createElement, lazy } from "react";
import { createRoot } from "react-dom/client";
const domNode = document.getElementById("root")!;
const root = createRoot(domNode);

export async function renderAppOne() {
  const AppOne = lazy(() => import("app1/App"));

  root.render(
    createElement(
      Suspense,
      { fallback: createElement("div", null, "loading") },
      createElement(AppOne)
    )
  );
}
