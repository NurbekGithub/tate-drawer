import { DEFAULT_STROKE, DEFAULT_FILL } from "./defaults";

window.polyline = function(
  points,
  stroke = DEFAULT_STROKE,
  fill = DEFAULT_FILL,
  width
) {
  return ` <polyline
    points=${points}
    style="stroke:${stroke};fill:${fill};stroke-width:${width}"
  />
  `;
};

window.қисық = function(
  points,
  stroke = DEFAULT_STROKE,
  fill = DEFAULT_FILL,
  width
) {
  return ` <polyline
    points="${points}"
    style="stroke:${stroke};fill:${fill};stroke-width:${width}"
  />
  `;
};
