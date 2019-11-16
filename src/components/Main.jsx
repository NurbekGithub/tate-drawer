/* eslint-disable no-eval */
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
require("../svgComponents/rect");
require("../svgComponents/circle");
require("../svgComponents/line");
require("../svgComponents/polyline");

function getHtml(text) {
  try {
    return text
      .split(/[;\n]/)
      .map(eval)
      .join("\n");
  } catch {
    return <p>...</p>;
  }
}

export default function Main() {
  const [code, setCode] = useLocalStorage("code", "");

  return (
    <main>
      <textarea
        className="engine"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <svg
        className="canvas"
        dangerouslySetInnerHTML={{ __html: getHtml(code) }}
      />
    </main>
  );
}
