// Selectors
const logo = document.querySelector("img");
const header = document.querySelector("h1");
const input = document.querySelector("#text");
const button = document.querySelector("#click-btn");
const output = document.querySelector(".output");
const clearButton = document.querySelector("#clear-btn");

// Functions
const onClickMe = () => {
  const headerH3 = document.createElement("h3");
  headerH3.textContent = "New Item H3";
  output.appendChild(headerH3);
};

const onClearClick = () => {
  Array.from(output.children).forEach((item) => item.remove());
};

const onClick = () => {
  logo.style.transform =
    logo.style.transform === "scale(1.2)" ? "scale(1)" : "scale(1.2)";
};

const onDoubleClick = () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "darkblue";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

const onRightClick = () => console.log("Context MenuEvent Fired!");

const onMouseDown = () => {
  logo.style.opacity = 0.5;
  console.log("On Mouse Down Event Fired!");
};

const onMouseUp = () => {
  logo.style.opacity = 1;
  console.log("On Mouse Up Event Fired!");
};

const onScroll = () => console.log("Scrolling.....");

const onHoverOver = () => console.log("Hovering over ha?");

const onHoverOut = () => console.log("Why leaving the logo?");

const onDragStart = () => console.log("Started to drag the element...");

const onDragEnd = () => console.log("Finished to drag the element...");

const onDrag = (event) => {
    header.textContent = `Logo is moving X: ${event.clientX}, Y: ${event.clientY}`;
}

// --------------------- MOUSE EVENTS --------------------- //

// onclick
logo.addEventListener("click", onClick);

// dlbclick
logo.addEventListener("dblclick", onDoubleClick);

// contextmenu - right click
logo.addEventListener("contextmenu", onRightClick);

// mouseDown
logo.addEventListener("mousedown", onMouseDown);

// mouseUp
logo.addEventListener("mouseup", onMouseUp);

// wheel - scroll
logo.addEventListener("wheel", onScroll);

// mouseover
logo.addEventListener("mouseover", onHoverOver);

// mouseout
logo.addEventListener("mouseout", onHoverOut);

// dragstart
logo.addEventListener("dragstart", onDragStart);

// dragend
logo.addEventListener("dragend", onDragEnd);

// drag
logo.addEventListener("drag", onDrag);

// adding a new element
button.addEventListener("click", onClickMe);

// removing the elements
clearButton.addEventListener("click", onClearClick);
