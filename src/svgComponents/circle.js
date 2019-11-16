import { DEFAULT_STROKE, DEFAULT_FILL } from "./defaults";

window.circle = function(
  x,
  y,
  radius,
  stroke = DEFAULT_STROKE,
  fill = DEFAULT_FILL
) {
  return ` <circle
    cx="${x}"
    cy="${y}"
    r="${radius}"
    style="stroke:${stroke};fill:${fill}"
  />
  `;
};

window.шеңбер = function(
  x,
  y,
  radius,
  stroke = DEFAULT_STROKE,
  fill = DEFAULT_FILL
) {
  return ` <circle
    cx="${x}"
    cy="${y}"
    r="${radius}"
    style="stroke:${stroke};fill:${fill}"
  />
  `;
};
