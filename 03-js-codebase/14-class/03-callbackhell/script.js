console.log("AJAX and XHR JS");

// ----------- Select Elements From Page -------------- //
const header = document.querySelector("h1");
const button = document.getElementById("btn-click");
const items = document.querySelector(".items");

function getData(endpoint, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", endpoint);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };

  const randomNumer = Math.floor(Math.random() * 3000 + 1000);
  console.log("Timeout: ", randomNumer);
  setTimeout(() => {
    xhr.send();
  }, randomNumer);
}

// get the data in order first get all songs, second get all authors, get all albums
// getData('./json/songs.json');
// getData('./json/authors.json');
// getData('./json/albums.json');

// this pattern is called callbackhell
// hard to read, maintain and debud
getData("./json/songs.json", (data) => {
  console.log(data);
  getData("./json/authors.json", (data) => {
    console.log(data);
    getData("./json/albums.json", (data) => {
      console.log(data);
    });
  });
});

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject({ error: "Something is wrong with data" });
        }
      }
    };

    const randomNumer = Math.floor(Math.random() * 3000 + 1000);
    console.log("Timeout: ", randomNumer);
    setTimeout(() => {
      xhr.send();
    }, randomNumer);
  });
}

// get the data in order first get all songs, second get all authors, get all albums
// getData('./json/songs.json');
// getData('./json/authors.json');
// getData('./json/albums.json');

// this pattern is called callbackhell
// hard to read, maintain and debud
getData("./json/songs.json")
  .then((data) => {
    console.log(data);
    return getData("./json/authors.json");
  })
  .then((data) => {
    console.log(data);
    return getData("./json/albums.json");
  }) 
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

