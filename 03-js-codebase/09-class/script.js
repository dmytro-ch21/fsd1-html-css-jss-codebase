// // -------------------- Selecting Single Elements From DOM --------------------- //

// // // It will return an element as object, if not found returns null
// // // getElementById()
// // // querySelector()

// // const goalTrackerElement = document.getElementById("goal-tracker"); // #id
// // console.log(goalTrackerElement);

// // // querySelector() - you can provide any selctor you need, from simple to advanced
// // // Select By ID #
// // const addGoalButton = document.querySelector("#add-goal"); // remember to add the shorcut for id and class
// // console.log(addGoalButton);
// // // Select By Class .
// // const containerElement = document.querySelector(".container");
// // console.log(containerElement);
// // // Select By tag
// // const inputElementByTag = document.querySelector("input");
// // console.log(inputElementByTag);
// // // Select By attribute value [data-set='value value']
// // const inputElementByCustomAttrribute =
// //   document.querySelector("[data-type=search]");
// // console.log(inputElementByCustomAttrribute);

// // // Use selector that has multiple elements
// // const multipleResultsElement = document.querySelector("div");
// // console.log(multipleResultsElement);

// // // Select By Pseudo Classes
// // const listItemElement = document.querySelector("li:nth-child(3)");
// // console.log(listItemElement);

// // // Scoped selection
// // const unorderedListElement = document.querySelector("#goal-list");
// // console.log(unorderedListElement);

// // const listItemLowPriority = unorderedListElement.querySelector(
// //   "li[data-priority=low]"
// // );
// // console.log(listItemLowPriority);

// // // By chaining methods
// // console.log(
// //   document.querySelector("#goal-list").querySelector("[data-priority=low]")
// // );

// // Accessing the attributes and modifiying them
// const goalTrackerEl = document.querySelector("#goal-tracker");
// console.log(goalTrackerEl.getAttribute("class"));

// const firstListItem = document.querySelector("li:nth-child(1)");
// const dataPriority = firstListItem.getAttribute("data-priority");

// // if(dataPriority === 'high'){
// //     alert('DO IT NOW!!!');
// // }

// // There are predefined attributes that are commonly used: id, className, title, href, name
// // access class value by predefined property
// console.log(goalTrackerEl.className);
// console.log(goalTrackerEl.id);

// // Modify the value of an attribute
// // For custom ones you just reassign the value
// // goalTrackerEl.id = 'new-goal-tracker';

// // setting value for custom attributes
// // firstListItem.setAttribute('data-priority', 'new-high-priority');
// // firstListItem.setAttribute('new-attr', 'new-value');

// // title attribute
// // firstListItem.title = 'Do more excercising during the day to improve your health!';

// // Modifiying the content and heml inside of an element
// // firstListItem.textContent = 'NEW VALUE!';

// // textContent vs innerText

// // inner text will not return anything that is not shown to the client
// // anything that is hidden, display: none
// // console.log(firstListItem.innerText);

// // // text cointent will return back anything present in the html as content
// // console.log(firstListItem.textContent);

// //
// // firstListItem.querySelector('span').textContent = 'Exercise 3 hours!';
// //
// // firstListItem.querySelector('span').innerText = 'Exercise 3 hours!';

// // replace the whole inner html
// // function taskDone() {
// //     // firstListItem.innerHTML = `
// //     // <span class="goal-text"><s>Exercise 3 hours!</s></span>
// //     // <button class="delete-btn">✓</button>`;
// //     firstListItem.style.display = 'none';
// // }

// // Modify styles with java script

// // firstListItem.style.color = 'blue';
// // firstListItem.style.backgroundColor = 'lightgrey';
// // firstListItem.style.fontSize = '1.7rem';
// // firstListItem.style.padding = '20px';
// // firstListItem.style.marginBottom = '50px';

// // firstListItem.style.cssText = `
// //     color: green;
// //     background-color: lightblue;
// //     padding: 4rem;
// //     border-radius: 15px;
// // `;

// // firstListItem.classList.add('list-item-yellow');

// // const styleColors = ["list-item-blue", "list-item-yellow","list-item-red"]
// // const index = Math.floor(Math.random() * styleColors.length);
// // firstListItem.classList.add(styleColors[index]);

// // ClassName vs ClassList
// // ClassName - referes to the whole class value as one single string
// // ClassList - returns an array of classes as string elements (you can add, remove, etc...)
// // firstListItem.className = 'new-class';

// // add(), remove(), toggle(), replace(), contains();
// // firstListItem.classList.add('active');
// // firstListItem.classList.remove('done', 'active');
// // firstListItem.classList.toggle('active'); // if the class exists it will remove it, if it doesnt exist it will add
// // firstListItem.classList.replace('active', 'done');
// // console.log(firstListItem.classList.contains('done')); // boolean res

// // console.log(firstListItem.classList);

// // Selecting multiple elements //
// // document.getElementsByClassName();
// // document.getElementsByName();
// // document.getElementsByTagName();
// // document.querySelectorAll();

// // HTMLCollection - is returned by folowing methods:
// // document.children, links, forms, images
// // It contains only elements
// // Limited methods applied - doesnt have high order functions
// // Need explicit conversion to an js array
// // Live on dome, dymically updates when there are changes
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("div"));

// // NodeList - is returned by following methods:
// // document.childNodes
// // static - doesnt get updated if the dom is changed
// // it contains all types of nodes not only elements
// // in order to access any element we will use index
// // it has forEach function

// console.log(document.getElementsByName("filter"));
// console.log(document.querySelectorAll("ul li"));

// // access a specific element from nodelist by index
// console.log(document.querySelectorAll("ul li")[2]);

// // document.querySelectorAll('ul li')[2].style.backgroundColor = 'lightgreen';

// const allListItems = document.querySelectorAll("ul li");

// allListItems.forEach((item, index) => {
//   // item.style.backgroundColor = 'lightblue';
//   // if(item.getAttribute('data-priority') === 'high'){
//   //     item.style.backgroundColor = 'red';
//   //     item.style.color = 'white';
//   // } else if(item.getAttribute('data-priority') === 'medium'){
//   //     item.style.backgroundColor = 'yellow';
//   //     item.style.color = 'darklue';
//   // } else {
//   //     item.style.backgroundColor = 'green';
//   //     item.style.color = 'white';
//   // }

//   if (index === 1) {
//     item.style.backgroundColor = "red";
//     item.style.color = "white";
//   } else {
//     item.style.backgroundColor = "white";
//     item.style.color = "black";
//   }
// });





