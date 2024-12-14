// Being able to create the elements in DOM dynamically via JS
// Element.innerHTTML = `<p>uwerf</p>`
window.onload = function () {
  // create an element in the container

  const myDivElement = document.createElement("div");
  // add attributes
  myDivElement.className = "new-item";
  myDivElement.id = "item-1";

  // adding content
  //  myDivElement.textContent = 'This is pretty cool!'
  myDivElement.innerText = "This is pretty cool!";

  // adding html inside as content
  myDivElement.innerHTML = `<p>This is also cool, cause its a tag!</p>`;

  // creting the new paragraph with function
  const p = document.createElement("p");
  p.innerText = "This is even cooler!";

  myDivElement.appendChild(p);

  // to actually get the element created by js into dom we need to append it
  // we could first locate the parent element and then add it to that element

  const container = document.querySelector(".container");
  container.appendChild(myDivElement);

  const newParagraph = createParagraph(
    "This is an element created by a function!!!"
  );
  container.appendChild(newParagraph);

  // Removal
  // remove self
  newParagraph.remove();
  // remove from parent
  container.removeChild(newParagraph);

  console.log(myDivElement);
};

function createParagraph(text) {
  const p = document.createElement("p");
  p.innerText = text;
  return p;
}


