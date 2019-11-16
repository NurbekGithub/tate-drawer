import React from "react";
import { useAnimation } from "../hooks/useAnimation";

export default function FooterDrawer({ height, content, closeDrawer }) {
  const animation = useAnimation("elastic", 600, 0);
  return (
    <div
      style={{
        flex: `0 0 ${height * animation}px`,
        overflowY: "auto",
        backgroundColor: "#B2DFDB",
        position: "relative"
      }}
    >
      {content}
      <button onClick={closeDrawer} className="close-btn">
        x
      </button>
    </div>
  );
}
