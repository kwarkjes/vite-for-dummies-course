export function createSVG(nodes) {
  let svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200">`;

  let x = 0;
  let y = 0;

  for (let i = 0; i < nodes.length; i++) {
    const nodeWidth = 90;
    svgString += `<rect x="${x}" y="${y}" width="${nodeWidth}" height="30" rx="7" ry="7" />`;
    svgString += `<text x="${x + 10}" y="${y + 20}">${nodes[i]}</text>`;

    if (i < nodes.length - 1 && nodes[i] !== "" && nodes[i + 1] !== "") {
      svgString += `<line x1="${x + nodeWidth}" y1="${
        y + 30 / 2
      }" x2="${x + nodeWidth + 50}" y2="${y + 30 / 2}" />`;
    }

    x += nodeWidth + 50;
  }

  svgString += `</svg>`;

  return svgString;
}
