// Selecting the chart element
const chart = document.querySelector(".chart");

// Creating the canvas element
const canvas = document.createElement("canvas");
canvas.width = 75;
canvas.height = 75;

// Append the canvas into the chart
chart.appendChild(canvas);

// To draw on the canvas, we need to get the context of the canvas
const ctx = canvas.getContext("2d");

// Changing the line width
ctx.lineWidth = 8;

// Circle Radius
const R = 20;

function drawCircle(color, ratio, anticlockwise) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    R,
    0,
    ratio * 2 * Math.PI,
    anticlockwise
  );
  ctx.stroke();
}

function updateChart(income, outcome) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let ratio = income / (income + outcome);

  drawCircle("#FFFFFF", -ratio, true);
  drawCircle("#F0624D", 1 - ratio, false);
}
