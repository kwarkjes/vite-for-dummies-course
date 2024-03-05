export function createSVG(nodes, title) {
  const nodeHeight = 30;
  const fontWidth = 8; // Adjusted font width
  const borderRadius = 5; // Adjusted border radius for rounded edges

  let maxNodeX = 0; // Track the maximum x-coordinate of nodes
  let maxNodeY = 0; // Track the maximum y-coordinate of nodes

  let x = 0;
  let y = 0;

  for (let i = 0; i < nodes.length; i++) {
    const textWidth = nodes[i].length * fontWidth; // Calculate the width of the text
    const nodeWidth = textWidth + 20; // Add some padding

    maxNodeX = Math.max(maxNodeX, x + nodeWidth); // Update maxNodeX
    maxNodeY = Math.max(maxNodeY, y + nodeHeight); // Update maxNodeY

    x += nodeWidth + 50; // Adjusted horizontal spacing
  }

  let svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${maxNodeX}" height="${maxNodeY}" data-title="${title}">`; // Start SVG string with width and height

  x = 0; // Reset x for rendering nodes

  for (let i = 0; i < nodes.length; i++) {
    const textWidth = nodes[i].length * fontWidth; // Calculate the width of the text
    const nodeWidth = textWidth + 20; // Add some padding

    // Add rectangle node to the SVG string
    svgString += `<rect x="${x}" y="${y}" width="${nodeWidth}" height="${nodeHeight}" rx="${borderRadius}" ry="${borderRadius}" />`;

    // Add text node to the SVG string
    svgString += `<text x="${x + 10}" y="${y + 20}">${nodes[i]}</text>`;

    if (i < nodes.length - 1 && nodes[i] !== "" && nodes[i + 1] !== "") {
      // Add line node to the SVG string
      svgString += `<line x1="${x + nodeWidth}" y1="${
        y + nodeHeight / 2
      }" x2="${x + nodeWidth + 50}" y2="${y + nodeHeight / 2}" />`;
    }

    x += nodeWidth + 50; // Adjusted horizontal spacing
  }

  svgString += `</svg>`; // End SVG string

  return svgString;
}
