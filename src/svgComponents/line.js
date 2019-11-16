import { DEFAULT_STROKE } from "./defaults";

window.line = function(x1, y1, x2, y2, width, stroke = DEFAULT_STROKE) {
  return ` <line
    x1="${x1}"
    y1="${y1}"
    x2="${x2}"
    y2="${y2}"
    style="stroke:${stroke};stroke-width:${width}"
  />
  `;
};

window.түзу = function(x1, y1, x2, y2, width, stroke = DEFAULT_STROKE) {
  return ` <line
    x1="${x1}"
    y1="${y1}"
    x2="${x2}"
    y2="${y2}"
    style="stroke:${stroke};stroke-width:${width}"
  />
  `;
};
