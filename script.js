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


canvas.addEventListener("mousedown",startDraw);
canvas.addEventListener("mousemove",drawing);
canvas.addEventListener("mouseup",() => (isDrawing = false), saveState());

const startDraw = (e) => {};
const drawing = (e) => {};

function saveState(){}