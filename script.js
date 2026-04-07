const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  fillColor = document.querySelector("#fillColor"),
  sizeSlider = document.querySelector("#sizeSlider"),
  colorBtns = document.querySelectorAll(".colors .option"),
  colorPicker = document.querySelector("#colorPicker"),
  cleatCanvas = document.querySelector(".clearCanvas"),
  saveImage = document.querySelector(".saveImg"),
  ctx = canvas.getContext("2d");

const undoButton = document.getElementById("undo");
const redoButton = document.getElementById("redo");

//global variabels wiht default values
let prevMouseX,
  prevMouseY,
  snapshot,
  isDrawing = false,
  selectedTool = "pencil",
  brushWidth = 5,
  selectedColor = "#000";


const setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
};


window.addEventListener("load", () => {
  // Setting canvas widht/height..
  // offsetwidht/height returns
  // viewbale widht/height of an element

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  setCanvasBackground();
});

toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});


const startDraw = (e) => {
  console.log(e);
  isDrawing= true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;

  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  snapshot = ctx.getImageData(0,0, canvas.width, canvas.height)
}

canvas.addEventListener("mousedown",startDraw);
canvas.addEventListener("mousemove",drawing);
canvas.addEventListener("mouseup",() => (isDrawing = false), saveState());

const drawPencil = (e) => {
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.shadowBlur = 0;
  ctx.stroke();
};

const drawBrush = (e) => {
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.shadowColor = selectedColor;
  ctx.shadowBlur = 15;
  ctx.stroke();
};

const drawing = (e) => {
  if(!isDrwaing) return ;

  ctx.putImageData(snapshot, 0,0)
  if((selectedTool === "pencil" && selectedTool === "brush") || selectedTool === "eraser"){
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke()
  }else if (selectedTool === "rectangle") {
    drawRect(e);
  } else if (selectedTool === "circle") {
    drawCircle(e);
  } else if (selectedTool === "triangle") {
    drawTriangle(e);
  } else if (selectedTool === "square") {
    drawSquare(e);
  } else if (selectedTool === "hexagon") {
    drawHexagon(e);
  } else if (selectedTool === "pentagon") {
    drawPentagon(e);
  } else if (selectedTool === "line") {
    drawLine(e);
  } else if (selectedTool === "arrow") {
    drawArrow(e);
  } else if (selectedTool === "curve") {
    drawCurve(e);
  } else if (selectedTool === "brush") {
    drawBrush(e);
  } else {
    drawPencil(e);
  }
};

};

function saveState(){}