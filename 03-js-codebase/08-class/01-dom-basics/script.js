// ------------------ DOM Basics ---------------------- //
window.onload = function () {
  // Window is the global object in DOM
  // console.log(window);

  // Document Object
  // console.log(window.document);
  console.log(document);

  // Access the title
  console.log(document.title);

  // Head and Body
  console.log(document.head);

  // Body
  console.log(document.body);

  // access the inner html of the body
  console.log(document.body.innerHTML);

  // modify what is inside of a tag
  document.body.innerHTML =
    "<h3>This is cool, I changed the header programatically!</h3>";

  // write
  document.write(
    "This text is added with write function. Be carefull with it!"
  );

  console.log(document.getElementById("main"));

  const mainElement = document.getElementById("main"); // getElementById returns an object
  //   mainElement.innerHTML = '<p>This is cool!</p>';
  //   console.log(mainElement.innerHTML);

  const mainTitle = document.getElementById("my-title");
  console.log(mainTitle);

  // Text Node
  mainTitle.innerText = "Changed Title";

  const userFullName = prompt("Enter Your Name:");
  console.log(userFullName);

  const userPlaceholder = document.getElementById("user-id");
  userPlaceholder.innerText = userFullName;

  // Few More Properties From Document Object
  let out;

  out = document.all; // HTMLCollection similar to array but doesnt have the functions
  out = document.all[7];
  out = document.all.length;

  // basic properties
  out = document.documentElement; // root element of the doc
  out = document.head;
  out = document.body;
  out = document.body.children;
  out = document.doctype;
  out = document.domain;
  out = document.URL;
  out = document.characterSet;
  out = document.contentType;

  // Collections of elements
  out = document.links;
  out = document.links[0];
  out = document.links[0].href;

  // Forms

  out = document.forms;
  out = document.forms[0];

  // modify/add attributes
  document.forms[0].id = "form-one-js";
  out = document.links[2];

  document.links[2].href = "https://www.facebook.com";
  document.links[2].text = "Facebook";

  // add a class to a link
  document.links[0].className = "class-from-js";

  const userChoice = "red";

  //   if(userChoice === 'red'){
  //     document.links[1].className = 'red-link';
  //   } else {
  //     document.links[1].className = 'green-link';
  //   }

  document.links[1].className =
    userChoice === "red" ? "red-link" : "green-link";

  // select elements with querySelector
  //   document.querySelector('.large-text').className = 'red-link';
  document.querySelector(".large-text").classList.add("red-link");

  out = document.links;

  //   document.links.forEach((link) => {
  //     console.log(link);
  //   });

  // Option 1
  const linkArray = Array.from(document.links);
  linkArray.forEach((link) => console.log(link));

  // Option 2 - use destructuring concept
  // rest operator
  const newLinkArray = [...document.links];
  newLinkArray.forEach((link) => console.log(link));

  console.log(out);
};
