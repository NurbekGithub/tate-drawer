import { DEFAULT_STROKE, DEFAULT_FILL } from "./defaults";
window.rect = function(
  x,
  y,
  width,
  height,
  stroke = DEFAULT_STROKE,
  fill = DEFAULT_FILL
) {
  return ` <rect
    x="${x}"
    y="${y}"
    width="${width}"
    height="${height}"
    style="stroke:${stroke};fill:${fill}"
  />
  `;
};

window.төртбұрыш = function(
  x,
  y,
  width,
  height,
  stroke = DEFAULT_STROKE,
  fill = DEFAULT_FILL
) {
  return ` <rect
    x="${x}"
    y="${y}"
    width="${width}"
    height="${height}"
    style="stroke:${stroke};fill:${fill}"
  />
  `;
};
