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
