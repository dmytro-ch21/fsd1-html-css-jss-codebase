console.log("AJAX and XHR JS");

// ----------- Select Elements From Page -------------- //
const header = document.querySelector('h1');
const button = document.getElementById('btn-click');
const items = document.querySelector('.items');


// HTTP - protocol
// AJAX - Async JS and XML
// XHR - XML Http Request

const xhr = new XMLHttpRequest();
// open function - provide method and endpoint/url
xhr.open('GET', './json/song.json'); 
// 0 - unsent/not initialized
// 1 - opened - open() has been called - connection established
// 2 - response header recieved
// 3 - response body/data recieved
// 4 - request finished / complete response recieved

// act on the event that we made
// properties that are useful from xhr obj - readyState, status, responseText
xhr.onreadystatechange = function() {
    // validate that your request is good
    if(xhr.readyState === 4 && xhr.status === 200){
      const response = JSON.parse(xhr.responseText);
      
      console.log(response);

      response.forEach((song) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
          <strong>${song.title}</strong> - Duration: ${song.duration}
        `;
        items.appendChild(div);
      });
    }
}

xhr.send();